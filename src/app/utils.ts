import {VideoPlatforms} from "./video-platforms";

export function saveSearchEntryToLS(platform: VideoPlatforms, entry: string) {
    const history = window.localStorage.getItem(platform);
    const historyParsed = history ?  JSON.parse(history) : [];
    historyParsed.unshift(entry);

    window.localStorage.setItem(platform, JSON.stringify(historyParsed));
}
