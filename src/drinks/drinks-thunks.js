import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllDrinks, createDrink, deleteDrink} from "./drinks-service";

export const createDrinksThunk = createAsyncThunk(
    'createDrink',
    (newDrink) => createDrink(newDrink)
)

export const findAllDrinksThunk = createAsyncThunk(
    'findAllDrinks',
    () => findAllDrinks()
)

export const updateDrinkThunk = {}
export const deleteDrinkThunk = createAsyncThunk(
    'deleteDrink',
    (mid) => deleteDrink(mid)
)