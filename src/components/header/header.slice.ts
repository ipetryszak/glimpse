import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {RootState} from "../../app/store";
import { VideoPlatforms } from "../../app/video-platforms";
import {YoutubeService} from "../../api/youtube.service";
import {getKeysFromLS} from "../../app/utils";
import {IPopularVideo, IVideo} from "../../models/youtube";


const ytService = new YoutubeService( getKeysFromLS().YouTube );

interface IInitialState {
    loading: boolean;
    error: string;
    selectedVideoPlatform: VideoPlatforms;
    search: IVideo[];
    popular: IPopularVideo[];
}

const initialState: IInitialState = {
    loading: false,
    error: '',
    selectedVideoPlatform: VideoPlatforms.YouTube,
    search: [],
    popular: []
};

export const fetchPopular: any = createAsyncThunk('fetchPopularVideos', async () => {
    return ytService.getPopular('PL');
});

export const search: any = createAsyncThunk('searchVideos', async (searchPhrase: string) => {
    return ytService.search(searchPhrase);
});


export const headerSlice = createSlice({
        name: 'header',
        initialState,
        reducers: {
            setVideoPlatform: (state, action) => {
                state.selectedVideoPlatform = action.payload;
            }
        },
        extraReducers: {
            [fetchPopular.pending]: (state) => {
                if (!state.loading) state.loading = true;
            },
            [fetchPopular.fulfilled]: (state, action) => {
                if(state.loading) state.loading = false;
                state.popular = [...action.payload];
            },
            [fetchPopular.rejected]: (state, action) => {
                if (state.loading) state.loading = false;
                state.error = action.error;
            },

            [search.pending]: (state) => {
                if (!state.loading) state.loading = true;
            },
            [search.fulfilled]: (state, action) => {
                if(state.loading) state.loading = false;
                state.search = [...action.payload];
            },
            [search.rejected]: (state, action) => {
                if (state.loading) state.loading = false;
                state.error = action.error;
            },
        },
    }

);

export const { setVideoPlatform } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.headerReducer;

export default headerSlice.reducer;
