import axios from "axios";
import { createParams } from "src/store/helpers.js";

export function getBasket(
  { commit, rootGetters },
  { action, category_id, count }
) {
  commit("changeBasketLoading", {
    section: action,
    value: true,
    elem: category_id,
  });
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/cart/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
      {
        bot_id: rootGetters["user/viewUser"].bot_data.id,
        user_id: rootGetters["user/viewUser"].data.id,
        secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        category_id: category_id,
        count: count,
      }
    )
    .then((response) => {
      console.log(response, "Корзина");
      if (response.data.result) {
        commit("changeBasketLoading", {
          section: action,
          value: false,
          elem: category_id,
        });
        commit("changeBasketData", response.data.data);
      }
    });
}
