import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesDrink} from "./likes-service";

export const userLikesDrinkThunk = createAsyncThunk(
    'userLikesDrink',
    async (like) => {
        return await userLikesDrink(like.uid, like.pid)
    }
)