import {createSlice} from "@reduxjs/toolkit";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "./follows-thunks";

const followsReducer = createSlice({
    name: 'follows',
    initialState: {
        following: [],
        followers: []
    },
    extraReducers: {
        [followUserThunk.fulfilled]: (state, {payload}) => {
            state.followers.push(payload)
        },
        [findFollowersThunk.fulfilled]: (state, {payload}) => {
            state.followers.push(payload)
        },
        [findFollowingThunk.fulfilled]: (state, {payload}) => {
            state.following.push(payload)
        },
    }
})

export default followsReducer.reducer