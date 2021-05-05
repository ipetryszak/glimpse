import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";
import { VideoPlatforms } from "../../app/video-platforms";

const initialState = {
    loading: false,
    error: '',
    selectedVideoPlatform: VideoPlatforms.YouTube,
};

export const headerSlice = createSlice({
        name: 'header',
        initialState,
        reducers: {
            setVideoPlatform: (state, action) => {
                state.selectedVideoPlatform = action.payload;
            }
        },
        extraReducers: {
        },
    }

);

export const { setVideoPlatform } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.headerReducer;

export default headerSlice.reducer;
