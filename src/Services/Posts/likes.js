import { API } from '../API'
import axios from 'axios'

async function getLikes(id, token) {
    const config = { authorization: 'Bearer ' + token }
    return await axios.get(API + `/likes/${id}`, { headers: config })
}

async function postLikes (id, token){
    const config = { authorization: 'Bearer ' + token }
    return await axios.post(API + `/likes`, {postId: id},{ headers: config })
}

export {
    getLikes,
    postLikes
}