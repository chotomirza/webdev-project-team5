import {createSlice} from "@reduxjs/toolkit";
import {
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk, updateUserThunk
} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        currentUser: null,
        publicProfile: null
    },
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.likes = state.likes
                .filter(u => u._id !== payload)
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [updateUserThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false
                const tuitNdx = state.users
                    .findIndex((t) => t._id === payload._id)
                state.users[tuitNdx] = {
                    ...state.users[tuitNdx],
                    ...payload

            }

    }
}})

export default usersReducer.reducer