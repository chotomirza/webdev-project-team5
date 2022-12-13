import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const LIKESURL = 'http://localhost:4000/collection'
// const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:did'

export const userLikesDrink = async (uid, did) => {
    const response = await axios.post(`${USERS_URL}/${uid}/collection/${did}`)
    // const response = await axios.post(`${USERS_URL}/${uid}/likes/${did}`)
    return response.data
}

export const findLikesByUser = async (uid) => {
    // const response = await axios.get(`${USERS_URL}/${uid}/likes`
    const response = await axios.get(`${USERS_URL}/${uid}/collection`
    )
    return response.data
}

export const findAllLikes = async() => {
    const response = await axios.get(LIKESURL)
    return response.data
}

