import axios from "axios";

const REVIEW_API = 'http://localhost:4000/api/reviews'
const DRINK_REVIEWS_API = 'http://localhost:4000/api/drinks'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByDrink = async (drinkID) => {
    const response = await api.get(`${DRINK_REVIEWS_API}/${drinkID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}
