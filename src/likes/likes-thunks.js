import {createAsyncThunk} from "@reduxjs/toolkit";
import {findLikes, findLikesByUser, userLikesDrink} from "./likes-service";
// import {findReviewsByAuthor} from "../omdb/reviews/reviews-service";

export const userLikesDrinkThunk = createAsyncThunk(
    'userLikesDrink',
    async (like, drink) => {
        // console.log("what is a like here?")
        // console.log(like)
        return await userLikesDrink(like.uid, like.drinkId)

    }
)

export const findLikeByUserThunk = createAsyncThunk(
    'findLikesByUser',
    async (uid) =>{
        return  findLikesByUser(uid)}
)

export const findLikesThunk = createAsyncThunk(
    'findLikes',async () => {return findLikes()}
)