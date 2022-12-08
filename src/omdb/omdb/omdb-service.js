import axios from "axios";

const SEARCH_URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s='
const DETAILS_URL = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i='
const PROJECT_DB = 'http://localhost:4000/api/drinks'

export const findDrinkBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    console.log("term " + term);
    console.log("response ");

    return Object.values(response.data.drinks);
}

export const findDrinkByDrinkId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data
}

export const createDrink = async (drink) => {
    const response = await axios.post(PROJECT_DB, drink)
    return response.data;
}