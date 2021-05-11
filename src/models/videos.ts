import {VideoPlatforms} from "../app/video-platforms";

export interface IVideosResults {
    origin: VideoPlatforms;
    nextPageToken: string;
    data: IVideoExtended[];
}

export type Chart = 'chartUnspecified' | 'mostPopular' | '';

export interface IVideoExtended {
    id: string;
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    player: string;
    chart?: Chart;
    thumbnail: {
        height: number;
        width: number;
        url: string;
    }
    statistics: {
        viewCount: number,
        likeCount: number,
        dislikeCount: number
    }
}
