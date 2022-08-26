import axios from "axios";

export function GetDigitalData(
  { commit, rootGetters },
  { action, offset, cate }
) {
  axios.post(
    `https://api.bot-t.com/v1/shopdigital/order/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
      offset: offset,
      category_id: category_id,
      count: count,
    }
  );
}
