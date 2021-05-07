import axios from 'axios';
import {stringify} from "querystring";

export class YoutubeService {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3';
    maxResults: number = 24;
    maxResultsSearch: number = 5;

    constructor(private apiKey: string = '') {}

    public set key(apiKey: string) {
        this.apiKey = apiKey;
    }

    async search(searchPhrase: string, pageToken?: string) {
        const params = stringify(
            {
                pageToken,
                q: searchPhrase,
                part: 'snippet',
                type: 'video',
                maxResults: this.maxResultsSearch,
                key: this.apiKey
            });

        const url = `${this.baseUrl}/search?`;

        const search = await axios.get(url + params);

        return search.data.items.map( (video: any) => (
            {
                id: video.id.videoId,
                title: video.snippet.title,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                thumbnail: video.snippet.thumbnails.high,
            }
        ));
    }

    async getPopular(regionCode: string, pageToken?: string) {
        const params = stringify(
                {
                    pageToken,
                    part: ['snippet','statistics'],
                    chart: 'mostPopular',
                    regionCode,
                    maxResults: this.maxResults,
                    key: this.apiKey
                });

        const url = `${this.baseUrl}/videos?`;

        const popular = await axios.get(url+params);

        return popular.data.items.map( (video: any) => (
            {
                id: video.id,
                title: video.snippet.title,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                thumbnail: video.snippet.thumbnails.medium,
                statistics: {
                    viewCount: video.statistics.viewCount,
                    likeCount: video.statistics.likeCount,
                    dislikeCount: video.statistics.dislikeCount
                }
            }
        ));
    }

}
