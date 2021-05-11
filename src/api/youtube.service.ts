import axios from 'axios';
import {stringify} from "querystring";
import {VideoPlatforms} from "../app/video-platforms";
import {Chart} from "../models/videos";
import { IYouTube } from "../models/youtubeApi";

interface Params {
    id?: string,
    maxResults: number,
    chart: Chart,
    part: string[],
    key: string
}

export class YoutubeService {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3';
    videosUrl: string = `${this.baseUrl}/videos?`;
    searchUrl = `${this.baseUrl}/search?`;

    constructor(private apiKey: string = '') {}

    public set key(apiKey: string) {
        this.apiKey = apiKey;
    }

    async search(maxResults: number, searchPhrase: string, pageToken?: string) {

        const params = stringify(
            {
                pageToken,
                q: searchPhrase,
                type: 'video',
                maxResults: maxResults,
                key: this.apiKey
            });


        const search = await axios.get(this.searchUrl + params);

        const idsList: string = search.data.items.map( (video: any) => video.id.videoId ).join(',');
        const res = await this.getVideos( maxResults,'', idsList);

        return {
            ...res,
            nextPageToken: search.data.nextPageToken
        };
    }

    async getVideos(maxResults: number, chart: Chart, ids?: string) {

        const params: Params | any  = {
            maxResults: maxResults,
            part: ['snippet','statistics'],
            key: this.apiKey,
        }

        if(ids) params.id = ids;
        if(chart) params.chart = chart;

        const paramsStringified = stringify(params);

        const videos = await axios.get(this.videosUrl + paramsStringified );
        console.log(videos);
        const data = videos.data.items.map( (video: IYouTube) => (
            {
                id: video.id,
                title: video.snippet.title,
                player: `https://www.youtube.com/embed/${video.id}`,
                description: video.snippet.description,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                thumbnail: video.snippet.thumbnails.medium,
                statistics: {
                    viewCount: video.statistics.viewCount,
                    likeCount: video.statistics.likeCount,
                    dislikeCount: video.statistics.dislikeCount
                }
            }));

        return { data, origin: VideoPlatforms.YouTube, nextPageToken: videos.data.nextPageToken };
    }
}
