import axios from 'axios';

import { API } from '../API'

async function getUser(id, token) {
    const config = { authorization: 'Bearer ' + token }
    return await axios.get(API + `/users/${id}`, {
        headers: config
    })
}

<<<<<<< HEAD
function getSearchUsers(username, token){
    const config = {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NjI5NTExOSwiZXhwIjoxNjY2Mjk1NzE5fQ.oMQ0q8We1D7dRpdQNJHhC1S6zT1NZhP7vAWXpn-cIyY' }
    return axios.get(API + `/users/search/${username}`, {headers: config})
=======
function getSearchUsers(username, token) {
    const config = { authorization: 'Bearer ' + token }
    return axios.get(API + `/users/search/${username}`, {
        headers: config
    })
>>>>>>> main
}

export {
    getUser,
    getSearchUsers
}