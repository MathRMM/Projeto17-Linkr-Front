import axios from 'axios';

import { API } from '../API'

async function getUser(id, token) {
    const config = { authorization: 'Bearer ' + token }
    return await axios.get(API + `/users/${id}`, {
        headers: config
    })
}

function getSearchUsers(username, token) {
    const config = { Authorization: 'Bearer ' + token }
    return axios.get(API + `/users/search/${username}`, {
        headers: config
    })
}

export {
    getUser,
    getSearchUsers
}