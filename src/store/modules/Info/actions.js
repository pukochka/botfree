import { request } from "../../../boot/request.js";

export function getRules({ commit, rootGetters }) {
  commit("changeInfoloading", {
    section: "rules",
    value: true,
  });
  request(
    `shoppublic/shop/info?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
    }
  ).then((response) => {
    console.log(response, "Правила");
    if (response.data.result) {
      commit("changeInfoData", {
        section: "rules",
        value: response.data.data,
      });
      commit("changeInfoloading", {
        section: "rules",
        value: false,
      });
    }
  });
}

export function getSales({ commit, rootGetters }) {
  commit("changeInfoloading", {
    section: "sales",
    value: true,
  });
  request(
    `shopcart/discount/index?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
    }
  ).then((response) => {
    console.log(response, "Скидки");
    if (response.data.result) {
      commit("changeInfoData", {
        section: "sales",
        value: response.data.data,
      });
      commit("changeInfoloading", {
        section: "sales",
        value: false,
      });
    }
  });
}
