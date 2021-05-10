import axios from 'axios';
import {stringify} from "querystring";

export class VimeoService {
    baseUrl: string = 'https://api.vimeo.com/';
    searchUrl: string = `${this.baseUrl}/videos?`;
    maxResultsSearch: number = 5;

    constructor(private apiKey: string = '') {}

    public set key(apiKey: string) {
        this.apiKey = apiKey;
    }

    async search(searchPhrase: string, page?: number) {

        const params = stringify(
            {
                page,
                query: searchPhrase,
                per_page: this.maxResultsSearch,
                access_token: this.apiKey
            });

        const search = await axios.get(this.searchUrl + params);

        console.log(search);
    }

}
