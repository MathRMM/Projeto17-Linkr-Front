import axios from 'axios';

import {API} from '../API'

function getUser(id){
    return axios.get(API + `/users/${id}`)
}

function getSearchUsers(username){
    return axios.get(API + `/users/search/${username}`)
}

export {
    getUser,
    getSearchUsers
}