import fetch from "isomorphic-fetch";
import { API_PREFIX } from "../../../etc/config";
import axios from "axios";

export class FieldCreator {
  constructor(url, data) {
    this.url = `${API_PREFIX}/api/${url}`;
    this.data = data;
    this.response = this.response.bind(this);
  }
  response() {
    return axios
      .post(this.url, this.data)
      .then(res => {
        if (res.status >= 200 && res.status < 300 && res.data && res.data.ok) {
          return res.data;
        } else {
          return { ok: false };
        }
      })
      .catch(err => {
        console.error(err);
        return { ok: false };
      });
  }
}
