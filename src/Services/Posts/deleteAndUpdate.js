import { API } from "../API";
import axios from "axios";

function deletePost(idPost, token) {
    console.log(idPost)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.delete(`${API}/timeline/${idPost}` , config)
}

export {
    deletePost
}