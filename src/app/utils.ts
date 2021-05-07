import {VideoPlatforms} from "./video-platforms";
import {IKey} from "../models/key";

export const API_KEYS_LS = 'apiKeys';

export function saveSearchEntryToLS(platform: VideoPlatforms, entry: string) {
    const history = window.localStorage.getItem(platform);
    const historyParsed = history ?  JSON.parse(history) : [];
    historyParsed.unshift(entry);

    window.localStorage.setItem(platform, JSON.stringify(historyParsed));
}

export function getSearchEntriesFromLS(platform: VideoPlatforms) {
    const history = window.localStorage.getItem(platform);
    return history ?  JSON.parse(history) : [];
}

export function saveKeysToLS(data: IKey) {
    window.localStorage.setItem(API_KEYS_LS, JSON.stringify(data));
}

export function getKeysFromLS() {
    const data = window.localStorage.getItem(API_KEYS_LS);
    return data ?  JSON.parse(data) : {YouTube: '', Vimeo: ''};
}
