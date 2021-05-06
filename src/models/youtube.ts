export interface IPopularVideos {
    id: string;
    title: string;
    channelTitle: string;
    publishedAt: Date;
    thumbnail: {
        height: number;
        width: number;
        url: string;
    },
    statistics: {
        viewCount: number,
        likeCount: number,
        dislikeCount: number
    }
}
