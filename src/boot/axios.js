import { boot } from "quasar/wrappers";
import axios from "axios";

const actionsBasket = ({ url, secret, post }) => {
  return axios({
    method: "post",
    url: url,
    baseURL: `https://api.bot-t.ru/v1/shopcart/cart/`,
    params: {
      secretKey: secret,
    },
    data: post,
  });
};

const actionsOrders = ({ url, secret, post }) => {
  return axios({
    method: "post",
    url: url,
    baseURL: `https://api.bot-t.ru/v1/shopcart/cart/`,
    params: {
      secretKey: secret,
    },
    data: post,
  });
};

const actionsUserData = ({ url, secret, post }) => {
  return axios({
    method: "post",
    url: url,
    baseURL: `https://api.bot-t.ru/v1/shopcart/cart/`,
    params: {
      secretKey: secret,
    },
    data: post,
  });
};

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
});

export { actionsBasket };
