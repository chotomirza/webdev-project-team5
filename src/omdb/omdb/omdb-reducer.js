import {createSlice} from "@reduxjs/toolkit";
// import {findDrinkBySearchTerm} from "./omdb-service";
import {findDrinkByDrinkIdThunk, findDrinkBySearchTermThunk} from "./omdb-thunks";

const initialState = {
    movies: [],
    loading: false,
    details: {}
}

const omdbReducer = createSlice({
    name: 'omdb',
    initialState,
    extraReducers: {
        [findDrinkBySearchTermThunk.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [findDrinkByDrinkIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default omdbReducer.reducer