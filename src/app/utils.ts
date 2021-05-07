import {VideoPlatforms} from "./video-platforms";
import {IKey} from "../models/key";

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
    window.localStorage.setItem('apiKeys', JSON.stringify(data));
}

export function getKeysFromLS() {
    const data = window.localStorage.getItem('apiKeys');
    return data ?  JSON.parse(data) : {YouTube: '', Vimeo: ''};
}
