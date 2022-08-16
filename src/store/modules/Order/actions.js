import axios from "axios";

export function getOrders(
  { commit, rootGetters, dispatch },
  { action, order_id, offset, delivery_id, is_back_cart }
) {
  commit("changeOrdersLoading", { section: action, value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
        user_id: rootGetters["user/viewUser"].data.id,
        secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        order_id: order_id,
        offset: offset,
        delivery_id: delivery_id,
        is_back_cart: is_back_cart,
      }
    )
    .then((response) => {
      console.log(response, "Заказы");
      if (response.status == 200) {
        if (action == "create") {
          commit("changeOrdersLoading", { section: action, value: false });
          commit("createNewOrder", response.data.data);
          commit("user/changeUserTab", "formsOrders", { root: true });
        } else if (action == "set-delivery") {
          commit("changeOrdersLoading", { section: action, value: false });
          window.Telegram.WebApp?.close();
        } else if (action == "cancel") {
          commit("changeOrdersLoading", { section: action, value: false });
          commit(
            "info/changeInfoDialogs",
            { section: "order" },
            { root: true }
          );
          commit("user/changeUserTab", "catalog", { root: true });
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
