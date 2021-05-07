import React from 'react';
import '@testing-library/jest-dom';

import {API_KEYS_LS, getKeysFromLS, getSearchEntriesFromLS, saveKeysToLS, saveSearchEntryToLS} from "./utils";
import {VideoPlatforms} from "./video-platforms";
import {IKey} from "../models/key";


describe('LocalStorage search history tests', () => {

    afterEach( () => {
        window.localStorage.clear();
    })

    it('should get search entries from local storage', async () => {
        const searchEntries = ['google', 'animals', 'enemy', 'cats']
        window.localStorage.setItem(VideoPlatforms.YouTube, JSON.stringify(searchEntries));

        const el = getSearchEntriesFromLS(VideoPlatforms.YouTube);
        expect(el.length).toEqual(searchEntries.length);
    });

    it('should get empty array', async () => {
        const el = getSearchEntriesFromLS(VideoPlatforms.YouTube);
        expect(el.length).toEqual(0);
    });

    it('should save to LS', async () => {
        const entry = 'snake';

        saveSearchEntryToLS(VideoPlatforms.Vimeo, entry);

        const el = getSearchEntriesFromLS(VideoPlatforms.Vimeo);
        expect(el.length).toEqual(1);
    });

    it('should last element be on first position', async () => {
        const entry = 'snake';
        const entry_2 = 'rat';

        saveSearchEntryToLS(VideoPlatforms.Vimeo, entry);
        saveSearchEntryToLS(VideoPlatforms.Vimeo, entry_2);
        const el = getSearchEntriesFromLS(VideoPlatforms.Vimeo);

        expect(el[0]).toEqual(entry_2);
    });
});


describe('LocalStorage api keys tests', () => {

    afterEach( () => {
        window.localStorage.clear();
    })

    it('should get empty keys from local storage', async () => {
        const keysLS = getKeysFromLS();

        expect(keysLS.YouTube).toEqual('');
        expect(keysLS.Vimeo).toEqual('');
    });

    it('should get example keys from local storage', async () => {
        const keys = {
            YouTube: 'youtubeKey',
            Vimeo: 'vimeoKey'
        }
        window.localStorage.setItem(API_KEYS_LS, JSON.stringify(keys));

        const keysLS = getKeysFromLS();

        expect(keysLS.YouTube).toEqual(keys.YouTube);
        expect(keysLS.Vimeo).toEqual(keys.Vimeo);
    });

    it('should save keys to LS', async () => {
        const keys: IKey = {
            YouTube: 'youtubeKey',
            Vimeo: 'vimeoKey'
        }

        saveKeysToLS(keys);
        const keysLS = getKeysFromLS();

        expect(keysLS.YouTube).toEqual(keys.YouTube);
        expect(keysLS.Vimeo).toEqual(keys.Vimeo);
    });
});
