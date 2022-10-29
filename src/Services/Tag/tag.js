import axios from "axios";
import { API } from "../API";

export default function tag(token) {
  const config = { headers: { authorization: "Bearer " + token } };
  const promisse = axios.get(`${API}/ranking`, config);

  return promisse;
}
