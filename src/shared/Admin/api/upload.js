import fetch from "isomorphic-fetch";
import { API_PREFIX } from "../../../etc/config";
import axios from "axios";

export const upload_city_xls = data => {
  return axios.post(`${API_PREFIX}/api/upload/city-xls`, data);
};
