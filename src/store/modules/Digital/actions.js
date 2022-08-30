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
      if (response.status === 200) {
        commit("changeDigitalLoading", { section: action, value: false });

        commit("changeDigitalData", response.data.data);
        commit("user/changeUserTab", "digital", { root: true });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
