import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from "../../app/store";
import {VideoPlatforms} from "../../app/video-platforms";
import {YoutubeService} from "../../api/youtube.service";
import {VimeoService} from "../../api/vimeo.service";
import {getKeysFromLS} from "../../app/utils";
import {IVideosResults} from "../../models/videos";
import {MAX_RESULTS_POPULAR, MAX_RESULTS_SEARCH} from "../../app/consts";

const ytService = new YoutubeService( getKeysFromLS().YouTube );
const vimeoService = new VimeoService( getKeysFromLS().Vimeo );

interface IHeaderState {
    loading: boolean;
    error: string;
    selectedVideoPlatform: VideoPlatforms;
    searchPhrase: string;
    fromHomepage: boolean;
    searchResult: IVideosResults;
    popular: IVideosResults;
}

const initialState: IHeaderState = {
    loading: false,
    error: '',
    selectedVideoPlatform: VideoPlatforms.YouTube,
    searchPhrase: '',
    fromHomepage: true,
    searchResult: {
        origin: VideoPlatforms.YouTube,
        nextPageToken: '',
        data: []
    },
    popular: {
        origin: VideoPlatforms.YouTube,
        nextPageToken: '',
        data: []
    },
};

export const fetchPopular: any = createAsyncThunk('fetchPopularVideos', async () => {
    return ytService.getVideos(MAX_RESULTS_POPULAR,'mostPopular');
});

export const search: any = createAsyncThunk('searchVideos',
    async (data: any, {dispatch, getState}) => {
    const state: any = getState();
    if(!data?.nextPageToken) dispatch( clearStore(getState()) );

    dispatch(setSearchPhrase(data.phrase));

    return state.headerReducer.selectedVideoPlatform === VideoPlatforms.YouTube ?
        ytService.search(MAX_RESULTS_SEARCH, data.phrase, data?.nextPageToken) :
        vimeoService.search(data.phrase, data?.nextPageToken);
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
                    origin: VideoPlatforms.YouTube,
                    data: []
                };
            },
            setSearchPhrase: (state, action) => {
                state.searchPhrase = action.payload;
            },
            setFromHomepage: (state, action) => {
                state.fromHomepage = action.payload;
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
                    origin: VideoPlatforms.YouTube,
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
                    origin: action.payload.origin,
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

export const { setVideoPlatform, clearStore, setSearchPhrase, setFromHomepage } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.headerReducer;

export default headerSlice.reducer;
