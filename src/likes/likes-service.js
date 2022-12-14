import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
// const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:did'

export const userLikesDrink = async (uid, did) => {
    const response = await axios.post(`${USERS_URL}/${uid}/collection/${did}`)
    // const response = await axios.post(`${USERS_URL}/${uid}/likes/${did}`)
    return response.data
}

export const deleteLike = async(pid) => {
    const url = `http://localhost:4000/collection/${pid}`
    console.log(url)
    const response = await axios.delete(url)
    return response.data
}

export const findLikesByUser = async (uid) => {
    // const response = await axios.get(`${USERS_URL}/${uid}/likes`
    const response = await axios.get(`${USERS_URL}/${uid}/collection`
    )
    return response.data
}

export const findLikes = async () => {
    const response = await axios.get(`http://localhost:4000/collection`)
    return response.data
}

