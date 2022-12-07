import axios from "axios";
import { API } from "../API";

export function tag(token) {
  const config = { headers: { authorization: "Bearer " + token } };
  const promise = axios.get(`${API}/ranking`, config);

  return promise;
}

export function getTagByName(hashtag, token){
  const config = { headers: { authorization: "Bearer " + token } };
  const promise = axios.get(`${API}/hashtag/${hashtag}`, config);

  return promise;
}
