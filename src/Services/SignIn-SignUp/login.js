import axios from "axios";
import { API } from "../API";

export function postLogin(body) {
    const promise = axios({
        method: 'post',
        url: `${API}/signin`,
        data: body,
    })
    return promise;
}

export function postSignUp(body) {
    const promise = axios({
        method: 'post',
        url: `${API}/signup`,
        data: body,
    })
    return promise;
}

export function getLogOut(token) {
    const promise = axios({
        method: 'get',
        url: `${API}/logout`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}

export function getUserProfile(token) {
    const promise = axios({
        method: 'get',
        url: `${API}/user-profile`,
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })
    return promise;
}