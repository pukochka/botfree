import axios from "axios";

export function getUserData({ commit, getters }, user) {
  axios
    .post("https://api.bot-t.com/v1/module/bot/check-hash" + user, {
      bot_id: getters.viewUser.bot_data.id,
    })
    .then((response) => {
      console.log(response, "Пользователь");
      if (response.data.result) {
        commit("changeUserProp", {
          section: "data",
          value: response.data.data,
        });

        if (getters.viewUser.bot_data.type.id === 7) {
          this.dispatch("order/getOrders", { action: "index", offset: 0 });
          this.dispatch("order/getOrdersCount");
          this.dispatch("basket/getBasket", { action: "get" });
        } else {
          this.dispatch("digital/GetDigitalData", {
            action: "index",
            offset: 0,
          });
          this.dispatch("digital/GetDigitalOrderCount");
        }

        this.dispatch("products/getProducts", { category: 0, text: "" });

        commit("SetGuest", true);
      } else {
        commit("changeUserProp", { section: "loading", value: true });
      }
    });
}

export function GetDataByDomain({ commit }, action = false) {
  commit("changeLoading", { section: "auth", value: true });
  axios
    .post(`https://api.bot-t.com/v1/module/bot/get-by-public-key`, {
      type_id: 1,
      public_key:
        window.location.host == "localhost:8080"
          ? "shopdigital.bot-t.com"
          : window.location.host,
    })
    .then((response) => {
      if (response.data.result) {
        console.log(response);

        commit("SaveBotDataWeb", response.data.data);
        commit("changeLoading", { section: "auth", value: false });
        if (action == "website") {
          commit("signWithWebsite");
        } else if (action == "telegram") {
          commit("signWithTelegram");
        }
        console.warn("Данные получены успешно!");
      } else {
        commit("changeLoading", { section: "auth", value: false });
        console.warn("Нет данных или отсуствует интернет соединение.");
      }
    })
    .catch((e) => {
      commit("changeLoading", { section: "auth", value: false });
      console.warn("Нет данных или отсуствует интернет соединение.");
    });
}

export function GetBotData({ commit }, { id, key }) {
  axios
    .post(`https://api.bot-t.com/v1/bot/main/info?secretKey=${key}`, {
      bot_id: id,
    })
    .then((response) => {
      console.log(response, "Бот");
      if (response.data.result) {
        commit("SaveBotDataTelegram", JSON.parse(response.data).data);
        commit("signWithTelegram");
      }
    });
}
