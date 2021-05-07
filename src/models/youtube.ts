export interface IVideo {
    id: string;
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnail: {
        height: number;
        width: number;
        url: string;
    }
}

export interface IPopularVideo extends IVideo{
    statistics: {
        viewCount: number,
        likeCount: number,
        dislikeCount: number
    }
}
