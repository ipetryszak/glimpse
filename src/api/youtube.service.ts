import axios from 'axios';

export class YoutubeService {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3';
    maxResults: number = 25;

    constructor(private apiKey: string = '') {}

    public set key(apiKey: string) {
        this.apiKey = apiKey;
    }

    search(searchPhrase: string, pageToken?: string) {
        const params = { params:
                                    {
                                        q: searchPhrase,
                                        pageToken,
                                        part: 'snippet',
                                        type: 'video',
                                        maxResults: this.maxResults,
                                        key: this.apiKey
                                    }
                        }

        const url = `${this.baseUrl}/search`;

        return axios.get(url, params);
    }

    async getPopular(regionCode: string, pageToken?: string) {
        const params = { params:
                {
                    pageToken,
                    part: 'snippet',
                    chart: 'mostPopular',
                    regionCode,
                    maxResults: this.maxResults,
                    key: this.apiKey
                }
        }

        const url = `${this.baseUrl}/videos`;

        const popular = await axios.get(url, params);

        return popular.data.items.map( (video: any) => (
            {
                id: video.id,
                title: video.snippet.title,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                thumbnail: video.snippet.thumbnails.high,
            }
        ));
    }

}
