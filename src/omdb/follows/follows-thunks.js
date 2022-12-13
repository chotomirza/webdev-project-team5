import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFollowing, findFollowers, followUser} from "./follows-service";



export const followUserThunk = createAsyncThunk(
    'followUser',
    async (thunkAPI) =>  await followUser(thunkAPI)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (followed) => await findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => await findFollowing(follower)
)

