import {createSlice} from "@reduxjs/toolkit";
import {createDrinksThunk, deleteDrinkThunk, findAllDrinksThunk} from "./drinks-thunks";

const initialState = {
    drinks: [],
    loading: true
}

const drinksReducer = createSlice({
    name: 'drinks',
    initialState: initialState,
    extraReducers: {
        [findAllDrinksThunk.fulfilled]: (state, action) => {
            state.drinks = action.payload
        },
        [createDrinksThunk.fulfilled]: (state, action) => {
            state.drinks.push(action.payload)
        },
        [deleteDrinkThunk.fulfilled]: (state, action) => {
            state.drinks = state.drinks.filter(m => {
                return m._id !== action.payload
            })
        }
    }
})

export default drinksReducer.reducer;