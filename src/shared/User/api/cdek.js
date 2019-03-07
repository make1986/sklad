import fetch from "isomorphic-fetch";
import config from "../../../etc/config";
import axios from "axios";

export const upload_video = data => {
  return axios.post(`${config.API_PREFIX}/api/uploads/video`, data);
};

export const get_city_code = () => {
  const encodedURI = encodeURI(
    `http://integration.cdek.ru/v1/location/cities/json?regionCode=23`
  );

  return fetch(encodedURI)
    .then(res => res.json())
    .catch(err => {
      console.warn(err);
      return null;
    });
};
