export interface IVideo {
    id: string;
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    thumbnail: {
        height: number;
        width: number;
        url: string;
    }
}

export interface IVideoExtended extends IVideo{
    statistics: {
        viewCount: number,
        likeCount: number,
        dislikeCount: number
    }
}
