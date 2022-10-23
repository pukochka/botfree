import { request } from "../../../boot/request.js";

export function getUserData({ commit, getters }, user) {
  request("module/bot/check-hash" + user, {
    bot_id: getters.viewUser.bot_data.id,
  }).then((response) => {
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
  request(`module/bot/get-by-public-key`, {
    type_id: 1,
    public_key:
      window.location.host == "localhost:8080"
        ? "shopdigital.bot-t.com"
        : window.location.host,
  })
    .then((response) => {
      console.log(response);

      if (response.data.result) {
        commit("SaveBotDataWeb", response.data.data);
        commit("changeLoading", { section: "auth", value: false });
        if (action == "website") {
          commit("signWithWebsite");
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
  request(`bot/main/info?secretKey=${key}`, {
    bot_id: id,
  }).then((response) => {
    console.log(response, "Бот");
    if (response.status === 200) {
      commit("SaveBotDataTelegram", JSON.parse(response.data).data);
      commit("signWithTelegram");
    }
  });
}

export function GetBotDataByUrl({ commit }) {
  let params = {};
  for (const [key, value] of new URLSearchParams(window.location.search)) {
    params[key] = value;
  }
  const { bot_id, secretKey } = params;
  request(`bot/main/info?secretKey=${secretKey}`, {
    bot_id: bot_id,
  }).then((response) => {
    const parse_data = JSON.parse(response.data);
    if (parse_data.result) commit("SaveBotData", parse_data.data);
  });
}

export function GetBotDataByDomain({ commit }) {
  console.log(2);
  //"shopdigital.bot-t.com"
  request(`module/bot/get-by-public-key`, {
    type_id: 1,
    public_key:
      window.location.host == "localhost:8080"
        ? "pukochka.github.io"
        : window.location.host,
  }).then((response) => {
    if (response.data.result) commit("SaveBotData", response.data.data);
  });
}
