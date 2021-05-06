import React from 'react';
import '@testing-library/jest-dom';

import {getSearchEntriesFromLS, saveSearchEntryToLS} from "./utils";
import {VideoPlatforms} from "./video-platforms";


describe('LocalStorage tests', () => {

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
