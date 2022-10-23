import axios from "axios";

const HOST = window.BOTCONFIG.host ?? "https://api.bot-t.com/v1/";
// console.log(HOST);
export const request = (url, params) => {
  return axios.post(HOST + url, params);
};
