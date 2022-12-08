import axios from "axios";

const SEARCH_URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s='
const DETAILS_URL = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    console.log("term " + term);
    console.log("response ");

    return Object.values(response.data.drinks);
}

export const findMovieByImdbId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data
}