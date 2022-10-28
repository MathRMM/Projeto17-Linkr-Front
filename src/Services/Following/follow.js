import axios from "axios";
import { API } from "../API";

export function getAllFollowing(token) {
    const promise = axios({
        method: 'get',
        url: `${API}/following`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}

export function getIsFollowing(idUser, token) {
    const promise = axios({
        method: 'get',
        url: `${API}/following/${idUser}`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}

export function getAddFollow(idUser, token) {
    const promise = axios({
        method: 'get',
        url: `${API}/follow/${idUser}`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}

export function getRemoveFollow(idUser, token) {
    const promise = axios({
        method: 'get',
        url: `${API}/unfollow/${idUser}`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}