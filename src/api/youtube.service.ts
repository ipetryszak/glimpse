import axios, { AxiosRequestConfig } from 'axios';

export class YoutubeService {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3';
    maxResults: number = 25;

    constructor(private apiKey: string = '') {}

    public set(apiKey: string) {
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

    getPopular(regionCode: string, pageToken?: string) {
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

        return axios.get(url, params);
    }

}
