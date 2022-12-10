import axios from "axios";
const DRINK_API_URL = 'http://localhost:4000/drinks'

export const createDrink = async (newDrink) => {
    const response = await axios.post(DRINK_API_URL, newDrink)
    const actualDrink = response.data
    return actualDrink
}
export const findAllDrinks = async () => {
    const response = await axios.get(DRINK_API_URL)
    const drinks = response.data
    return drinks
}

export const updateDrink = async () => {}

export const deleteDrink = async (mid) => {
    const response = await axios.delete(`${DRINK_API_URL}/${mid}`)
    const status = response.data
    console.log(status);
    return mid;
}