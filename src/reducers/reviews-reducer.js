import {createSlice} from "@reduxjs/toolkit";
import reviewsArray from "../data/reviews.json"

const reviewsSlice = createSlice({
                                     name: "review",
                                     initialState: reviewsArray
                                 });

export default reviewsSlice.reducer;
