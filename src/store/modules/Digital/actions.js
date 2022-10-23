import { request } from "../../../boot/request.js";

export function GetDigitalData(
  { commit, rootGetters },
  { action, offset, category_id, count, order_id }
) {
  commit("changeDigitalLoading", { section: action, value: true });
  request(
    `shopdigital/order/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
      offset: offset,
      category_id: category_id,
      count: count,
      order_id: order_id,
    }
  )
    .then((response) => {
      console.log(response, "цифровые товары");
      if (response.data.result) {
        if (action == "index") {
          commit("order/changeOrdersData", response.data.data, { root: true });
        } else if (action == "cancel") {
          commit("user/changeUserTab", "catalog", { root: true });
        } else {
          commit("changeDigitalData", response.data.data);
          commit("user/changeUserTab", "digital", { root: true });
        }
        commit("changeDigitalLoading", { section: action, value: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function GetDigitalOrderCount({ commit, rootGetters }) {
  commit("changeDigitalLoading", { section: "count", value: true });
  request(
    `shopdigital/order/count?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
    }
  )
    .then((response) => {
      console.log(response, "количество заказов ЦТ");
      if (response.data.result) {
        commit("order/changeOrdersCount", response.data.data.count, {
          root: true,
        });
        commit("changeDigitalLoading", { section: "count", value: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
