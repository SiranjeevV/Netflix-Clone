import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popular: null,
        topRated: null,
        upcoming: null,
        trailerKey: null,
        logoKey: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpComing: (state, action) => {
            state.upcoming = action.payload;
        },
        addTrailerkey: (state, action) => {
            state.trailerKey = action.payload;
        },
        addLogoKey: (state, action) => {
            state.logoKey = action.payload;
        }
    }
})
export const { addNowPlayingMovies, addTrailerkey, addLogoKey, addTopRated, addPopular, addUpComing } = movieSlice.actions;
export default movieSlice.reducer