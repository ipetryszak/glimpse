import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";
import { VideoPlatforms } from "../../app/video-platforms";
import {YoutubeService} from "../../api/youtube.service";

const ytService = new YoutubeService('');

const initialState = {
    loading: false,
    error: '',
    selectedVideoPlatform: VideoPlatforms.YouTube,
    videosList: {},
    popular: {}
};

export const fetchPopular: any = createAsyncThunk('fetchPopularVideos', async () => {
    return ytService.getPopular('PL');
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
                state.popular = {...action.payload};
            },
            [fetchPopular.rejected]: (state, action) => {
                if (state.loading) state.loading = false;
                state.error = action.error;
            },
        },
    }

);

export const { setVideoPlatform } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.headerReducer;

export default headerSlice.reducer;
