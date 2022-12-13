import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllLikes, findLikesByUser, userLikesDrink} from "./likes-service";
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

export const findAllLikesThunk = createAsyncThunk(
    'findAllLikes',async() => await findAllLikes()
)