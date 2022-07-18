import axios from "axios";
import { createParams } from "src/store/helpers.js";

export function getUserData({ commit, getters }) {
  axios
    .post(
      `https://api.bot-t.com/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.viewUser.search.secretKey}`,
      {
        bot_id: getters.viewUser.search.bot_id,
        telegram_id: getters.viewUser.init_telegram.user.id,
      }
    )
    .then((response) => {
      console.log(response, "Пользователь");
      if (response.status === 200) {
        commit("changeUserProp", {
          section: "data",
          value: response.data.data,
        });
        commit("changeUserProp", { section: "loading", value: false });
        this.dispatch("info/getBot");
        this.dispatch("order/getOrders", { action: "index", offset: 0 });
        this.dispatch("order/getOrdersCount");
        this.dispatch("basket/getBasket", { action: "get" });
        this.dispatch("products/getProducts", { category: 0, text: "" });
      } else {
        commit("changeUserProp", { section: "loading", value: true });
      }
    });
}
