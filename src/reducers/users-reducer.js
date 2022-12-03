import {createSlice} from "@reduxjs/toolkit";
import usersArray from "../data/saves.json"

const usersSlice = createSlice({
                                   name: "user",
                                   initialState: usersArray
                               });

export default usersSlice.reducer;
