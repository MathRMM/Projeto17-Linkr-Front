import axios from "axios";
import { API } from "../API";

async function postsApi(token){
    const config = {
        headers:{ authorization: 'Bearer ' + token}
    }
    return await axios.get(API + '/timeline', config)
}

export {
    postsApi
}