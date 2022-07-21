import axios from "axios";
import { createParams } from "src/store/helpers.js";

export function getOrders(
  { commit, rootGetters },
  { action, order_id, offset, delivery_id }
) {
  commit("changeOrdersLoading", { section: action, value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id", "offset", "delivery_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
          user_id: rootGetters["user/viewUser"].data.id,
          secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        },
        order_id,
        offset,
        delivery_id
      )
    )
    .then((response) => {
      console.log(response, "Заказы");
      if (response.status == 200) {
        if (action == "create") {
          // commit("changeOrdersLoading", { section: action, value: false });
          // commit("newOrderInfo", response.data.data);
        } else if (action == "set-delivery") {
          commit("changeOrdersLoading", { section: action, value: false });
        } else {
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
