import axios from "axios";

export function getUserData({ commit, getters, rootGetters }, id) {
  axios
    .post(
      `https://api.bot-t.com/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.viewUser.bot_data.secret_key}`,
      {
        bot_id: getters.viewUser.bot_data.id,
        telegram_id: id,
      }
    )
    .then((response) => {
      console.log(response, "Пользователь");
      if (response.status === 200) {
        commit("changeUserProp", {
          section: "data",
          value: response.data.data,
        });

        this.dispatch("info/getBot");
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
// window.location.host ВМЕСТО PUKOCHKA.GITHUB.IO
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
      if (response.status === 200) {
        console.log(response);
        // commit("SetError", false);
        commit("SaveBotData", response.data.data);
        commit("changeLoading", { section: "auth", value: false });
        if (action == "website") {
          commit("signWithWebsite");
        } else if (action == "telegram") {
          commit("signWithTelegram");
        }
        console.warn("Данные получены успешно!");
      } else {
        // commit("SetError", true);
        commit("changeLoading", { section: "auth", value: false });
        console.warn("Нет данных или отсуствует интернет соединение.");
      }
    })
    .catch((e) => {
      // commit("SetError", true);
      commit("changeLoading", { section: "auth", value: false });
      console.warn("Нет данных или отсуствует интернет соединение.");
    });
}
