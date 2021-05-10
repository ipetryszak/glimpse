import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {RootState} from "../../app/store";
import { VideoPlatforms } from "../../app/video-platforms";
import {YoutubeService} from "../../api/youtube.service";
import {getKeysFromLS} from "../../app/utils";
import {IVideoExtended} from "../../models/youtube";


const ytService = new YoutubeService( getKeysFromLS().YouTube );

interface IInitialState {
    loading: boolean;
    error: string;
    selectedVideoPlatform: VideoPlatforms;
    searchResult: {
        nextPageToken: string,
        data: IVideoExtended[]
    };
    popular: {
        nextPageToken: string,
        data: IVideoExtended[]
    };
}

const initialState: IInitialState = {
    loading: false,
    error: '',
    selectedVideoPlatform: VideoPlatforms.YouTube,
    searchResult: {
        nextPageToken: '',
        data: []
    },
    popular: {
        nextPageToken: '',
        data: []
    },
};

export const fetchPopular: any = createAsyncThunk('fetchPopularVideos', async () => {
    return ytService.getPopular('PL');
});

export const search: any = createAsyncThunk('searchVideos',
    async (data: any, {dispatch, getState}) => {
    if(!data?.nextPageToken) dispatch( clearStore(getState()) );
    return ytService.search(data.phrase, data?.nextPageToken);
});


export const headerSlice = createSlice({
        name: 'header',
        initialState,
        reducers: {
            setVideoPlatform: (state, action) => {
                state.selectedVideoPlatform = action.payload;
            },
            clearStore: (state, action) => {
                state.searchResult = {
                    nextPageToken: '',
                    data: []
                };
            }
        },
        extraReducers: {
            [fetchPopular.pending]: (state) => {
                if (!state.loading) state.loading = true;
            },
            [fetchPopular.fulfilled]: (state, action) => {
                if(state.loading) state.loading = false;
                state.popular = {
                    nextPageToken: action.payload.nextPageToken,
                    data: [ ...state.searchResult.data, ...action.payload.data ]
                }
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
                state.searchResult = {
                    nextPageToken: action.payload.nextPageToken,
                    data: [ ...state.searchResult.data, ...action.payload.data ]
                }
            },
            [search.rejected]: (state, action) => {
                if (state.loading) state.loading = false;
                state.error = action.error;
            },
        },
    }

);

export const { setVideoPlatform, clearStore } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.headerReducer;

export default headerSlice.reducer;
