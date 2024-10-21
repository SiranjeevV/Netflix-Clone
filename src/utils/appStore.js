import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import searchReducer from "./searchSlice"
const appStore = configureStore({
    reducer: {
        movies: movieReducer,
        search: searchReducer,
        user: userReducer,
    }
})
export default appStore