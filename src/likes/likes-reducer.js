import {createSlice} from "@reduxjs/toolkit";
import {findLikeByUserThunk, userLikesDrinkThunk} from "./likes-thunks";
import {findReviewsByAuthorThunk} from "../omdb/reviews/reviews-thunks";
import {findLikesByUser} from "./likes-service";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesDrinkThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        },
        [findLikeByUserThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        }

    }
})