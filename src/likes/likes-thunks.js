import {createAsyncThunk} from "@reduxjs/toolkit";
import {findLikesByUser, userLikesDrink} from "./likes-service";
import {findReviewsByAuthor} from "../omdb/reviews/reviews-service";

export const userLikesDrinkThunk = createAsyncThunk(
    'userLikesDrink',
    async (like) => {
        return await userLikesDrink(like.uid, like.pid)
    }
)

export const findLikeByUserThunk = createAsyncThunk(
    'findLikesByUser',
    async (uid) =>{
        return  findLikesByUser(uid)}
)