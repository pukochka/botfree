import axios from "axios";

export function GetDigitalData(
  { commit, rootGetters },
  { action, offset, category_id, count, order_id }
) {
  commit("changeDigitalLoading", { section: action, value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shopdigital/order/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
      {
        bot_id: rootGetters["user/viewUser"].bot_data.id,
        user_id: /*rootGetters["user/viewUser"].data.id*/ 7536586,
        secret_user_key:
          /*rootGetters["user/viewUser"].data.secret_user_key*/ "b0bb835199928351b0bb56859992019eb0bbd9e1bf81bf81",
        offset: offset,
        category_id: category_id,
        count: count,
        order_id: order_id,
      }
    )
    .then((response) => {
      console.log(response, "цифровые товары");
      if (response.status === 200) {
        if (action == "index") {
          commit("order/changeOrdersData", response.data.data, { root: true });
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
  axios
    .post(
      `https://api.bot-t.com/v1/shopdigital/order/count?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
      {
        bot_id: rootGetters["user/viewUser"].bot_data.id,
        user_id: /*rootGetters["user/viewUser"].data.id*/ 7536586,
        secret_user_key:
          /*rootGetters["user/viewUser"].data.secret_user_key*/ "b0bb835199928351b0bb56859992019eb0bbd9e1bf81bf81",
      }
    )
    .then((response) => {
      console.log(response, "количество заказов ЦТ");
      if (response.status === 200) {
        commit("order/changeOrdersCount", response.data.data, { root: true });
        commit("changeDigitalLoading", { section: "count", value: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
