import axios from "axios";

export function getRules({ commit, rootGetters }) {
  commit("changeInfoloading", {
    section: "rules",
    value: true,
  });
  axios
    .post(
      `https://api.bot-t.com/v1/shoppublic/shop/info?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
      }
    )
    .then((response) => {
      console.log(response, "Правила");
      if (response.status === 200) {
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
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/discount/index?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
      }
    )
    .then((response) => {
      console.log(response, "Скидки");
      if (response.status === 200) {
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

export function getBot({ commit, rootGetters }) {
  commit("changeInfoloading", {
    section: "bot",
    value: true,
  });
  axios
    .post(
      `https://api.bot-t.com/v1/bot/main/info?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
      }
    )
    .then((response) => {
      console.log(response, "Бот");
      if (response.status === 200) {
        commit("changeInfoData", {
          section: "bot",
          value: JSON.parse(response.data).data,
        });
        commit("changeInfoloading", {
          section: "rules",
          value: false,
        });
      }
    });
}
