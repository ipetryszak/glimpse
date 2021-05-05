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

        },
        extraReducers: {
           /* [fetchRefProjects.pending]: (state) => {
                if (!state.loading) state.loading = true;
            },
            [fetchRefProjects.fulfilled]: (state, action) => {
                if(state.loading) state.loading = false;
                state.loaded = true;
                state.refProjects = [...action.payload];
            },
            [fetchRefProjects.rejected]: (state, action) => {
                if (state.loading) state.loading = false;
                state.error = action.error;
            }*/
        },
    }

);

export default headerSlice.reducer;
