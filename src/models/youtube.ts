export interface IPopularVideos {
    id: string;
    title: string;
    channelTitle: string;
    publishedAt: string;
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
