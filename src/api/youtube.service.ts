import axios from 'axios';
import {stringify} from "querystring";

export class YoutubeService {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3';
    videosUrl: string = `${this.baseUrl}/videos?`;
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
                type: 'video',
                maxResults: this.maxResultsSearch,
                key: this.apiKey
            });

        const url = `${this.baseUrl}/search?`;
        const search = await axios.get(url + params);

        const idsList: string = search.data.items.map( (video: any) => video.id.videoId ).join(',');
        return this.getVideos(idsList);
    }

    async getVideos(ids: string) {

        const params = stringify(
            {
                id: ids,
                part: ['snippet','statistics'],
                key: this.apiKey
            });

        const videos = await axios.get(this.videosUrl + params);

        console.log(videos);

        return videos.data.items.map( (video: any) => (
            {
                id: video.id,
                title: video.snippet.title,
                description: video.snippet.description,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                thumbnail: video.snippet.thumbnails.high,
                statistics: {
                    viewCount: video.statistics.viewCount,
                    likeCount: video.statistics.likeCount,
                    dislikeCount: video.statistics.dislikeCount
                }
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

        const popular = await axios.get(this.videosUrl + params);

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
