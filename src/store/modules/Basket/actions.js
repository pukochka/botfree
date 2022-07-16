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
  console.log(action);
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/cart/${action}?secretKey=${rootGetters.viewInitData.search.secretKey}`,
      createParams(
        ["category_id", "count"],
        {
          bot_id: rootGetters.viewInitData.search.bot_id,
          user_id: rootGetters.viewUserData.id,
          secret_user_key: rootGetters.viewUserData.secret_user_key,
        },
        category_id,
        count
      )
    )
    .then((response) => {
      console.log(response, "Корзина");
      commit("changeBasketLoading", {
        section: action,
        value: false,
        elem: category_id,
      });
      commit("changeBasketData", response.data.data);
    });
}
