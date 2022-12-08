import {createAsyncThunk} from "@reduxjs/toolkit";
import {findDrinkByDrinkId, findDrinkBySearchTerm} from "./omdb-service";

export const findDrinkBySearchTermThunk = createAsyncThunk(
    'findDrinkBySearchTerm',
    (term) => findDrinkBySearchTerm(term)
)
export const findDrinkByDrinkIdThunk = createAsyncThunk(
    'findDrinkByDrinkId',
    (drinkID) => findDrinkByDrinkId(drinkID)
)

export const createDrink = createAsyncThunk(
    'createDrink',
    (drinkID) => createDrink(drinkID)
)