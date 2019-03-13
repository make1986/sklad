import fetch from "isomorphic-fetch";
import { API_PREFIX } from "../../../etc/config";
import axios from "axios";

export class MultiBootloader {
  constructor(url, params = "") {
    this.url = encodeURI(`${API_PREFIX}/api/${url}/${params}`);
    this.params = params;
    this.response = this.response.bind(this);
  }
  response() {
    return fetch(this.url)
      .then(res => res.json())
      .catch(err => {
        console.error(err);
        return { ok: false };
      });
  }
}

export const upload_city_xls = data => {
  return axios.post(`${API_PREFIX}/api/upload/city-xls`, data);
};
