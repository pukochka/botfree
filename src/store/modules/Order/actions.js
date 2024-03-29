import { request } from "../../../boot/request.js";

export function getOrders(
  { commit, rootGetters, dispatch },
  { action, order_id, offset, delivery_id, is_back_cart }
) {
  commit("changeOrdersLoading", { section: action, value: true });
  request(
    `shopcart/order/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
      order_id: order_id,
      offset: offset,
      delivery_id: delivery_id,
      is_back_cart: is_back_cart,
    }
  ).then((response) => {
    console.log(response, "Заказы");
    if (response.data.result) {
      if (action == "create") {
        commit("changeOrdersLoading", { section: action, value: false });
        commit("createNewOrder", response.data.data);
        commit("user/changeUserTab", "formsOrders", { root: true });
      } else if (action == "set-delivery") {
        commit("changeOrdersLoading", { section: action, value: false });
        window.Telegram.WebApp?.close();
      } else if (action == "cancel") {
        commit("changeOrdersLoading", { section: action, value: false });
        commit("info/changeInfoDialogs", { section: "order" }, { root: true });
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
  request(
    `shopcart/order/count?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
    }
  ).then((response) => {
    if (response.data.result) {
      commit("changeOrdersCount", response.data.data.count);
    }
  });
}
