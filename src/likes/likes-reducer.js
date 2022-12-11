import {createSlice} from "@reduxjs/toolkit";
import {userLikesDrinkThunk} from "./likes-thunks";

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
        }
    }
})