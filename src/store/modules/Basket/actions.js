import axios from "axios";
import { createParams } from "src/store/helpers.js";

export function actionsWithBasket(
  { commit, rootGetters },
  { action, category_id, count }
) {
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

      commit("changeBasket", response.data.data);
    });
}
