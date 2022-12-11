import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
// const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:did'

export const userLikesDrink = async (uid, did) => {
    const response = await axios.post(`${USERS_URL}/${uid}/likes/${did}`)
    return response.data
}