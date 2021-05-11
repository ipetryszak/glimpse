export interface IYouTube {
    etag: string;
    id: string;
    kind: string;
    snippet: {
        title: string;
        description: string;
        channelTitle: string;
        publishedAt: string;
        thumbnails: {
            medium: {
                height: number;
                width: number;
                url: string;
            }
        }
    }
    statistics: {
        viewCount: number;
        likeCount: number;
        dislikeCount: number;
    }
}
