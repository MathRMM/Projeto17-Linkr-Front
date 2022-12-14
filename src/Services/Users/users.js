import axios from 'axios';

import { API } from '../API'

async function getUser(id, token, page) {
    const config = { authorization: 'Bearer ' + token }
    return await axios.get(API + `/users/${id}?page=${page}`, {
        headers: config
    })
}

function getSearchUsers(username, token) {
    console.log(token)
    const config = { authorization: 'Bearer ' + token }
    return axios.get(API + `/users/search/${username}`, {
        headers: config
    })
}

export {
    getUser,
    getSearchUsers
}