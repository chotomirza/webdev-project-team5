import {createSlice} from "@reduxjs/toolkit";
import savesArray from "../data/saves.json"

const savesSlice = createSlice({
                                    name: "save",
                                    initialState: savesArray
                                });

export default savesSlice.reducer;
