import axios from "axios";
import { API } from "../API";

async function getPostsApi(page, token){
    const config = {
        headers:{ authorization: 'Bearer ' + token}
    }
    return await axios.get(API + '/timeline?page=' + page , config)
}

async function upPost(post, token){
    const config = {
        headers:{ authorization: 'Bearer ' + token}
    }
    return await axios.post(API + '/timeline', post, config)
}

async function updatePost(token){
    const config = {
        headers:{ authorization: 'Bearer ' + token}
    }
    return await axios.get(API + '/count/posts', config)
}

export {
    getPostsApi,
    upPost,
    updatePost
}