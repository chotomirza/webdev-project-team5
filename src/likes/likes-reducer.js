import {createSlice} from "@reduxjs/toolkit";
import {findLikesThunk, findLikeByUserThunk, userLikesDrinkThunk} from "./likes-thunks";
// import {findReviewsByAuthorThunk} from "../omdb/reviews/reviews-thunks";
import {findLikesByUser} from "./likes-service";

const initialState = {
    likes: [],
    loading: false
}

 const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesDrinkThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        },
        [findLikeByUserThunk.fulfilled]: (state, action) => {
            //changed this from state.reviews to state.likes
            state.likes = action.payload
        },
        [findLikesThunk.fulfilled]: (state, action) => {
            state.likes = action.payload
            state.loading = false
        }

    }
})

export default likesReducer



