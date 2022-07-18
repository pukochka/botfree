import axios from "axios";
import { createParams } from "src/store/helpers.js";

export function getOrders(
  { commit, rootGetters },
  { action, order_id, offset }
) {
  commit("changeOrdersLoading", { section: action, value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id", "offset"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
          user_id: rootGetters["user/viewUser"].data.id,
          secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        },
        order_id,
        offset
      )
    )
    .then((response) => {
      if (response.status == 200) {
        console.log(response, "Заказы");
        if (action != "create") {
          commit("changeOrdersLoading", { section: action, value: false });
          commit("changeOrdersData", response.data.data);
          window.scrollTo({ top: 0 });
        }
      }
    });
}

export function getOrdersCount({ commit, rootGetters }) {
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/count?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
        user_id: rootGetters["user/viewUser"].data.id,
        secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
      }
    )
    .then((response) => {
      if (response.status == 200) {
        commit("changeOrdersCount", response.data.data.count);
      }
    });
}
