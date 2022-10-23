import { request } from "../../../boot/request.js";

// export function getPayments(
//   { commit, rootGetters },
//   { action, group_id, order_id }
// ) {
//   commit("changeFormLoading", { section: "payments", value: true });
//   axios
//     .post(
//       `https://api.bot-t.com/v1/common/money/payment/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
//       createParams(
//         ["group_id", "order_id"],
//         {
//           bot_id: rootGetters["user/viewUser"].bot_data.id,
//         },
//         group_id,
//         order_id
//       )
//     )
//     .then((response) => {
//       if (response.data.result) {
//         if (action != "set-item") {
//           commit("changeFormData", {
//             section: "payments",
//             data: response.data.data[0].groups,
//           });
//           commit("changeFormLoading", { section: "payments", value: false });
//         } else {
//           commit("form/changeFormSelect", {
//             section: "payments",
//             data: response.data.data,
//           });
//           commit("order/changeOrdersLoading", {
//             section: action,
//             value: false,
//           });
//         }
//       }
//       console.log(response.data.data[0], "Оплата");
//     });
// }

export function getDelivery({ commit, rootGetters }, { action, order_id }) {
  commit("changeFormLoading", { section: "delivery", value: true });
  request(
    `shopcart/delivery/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      order_id: order_id,
    }
  ).then((response) => {
    if (response.data.result) {
      commit("changeFormData", {
        section: "delivery",
        data: response.data.data,
      });
      commit("changeFormLoading", { section: "delivery", value: false });
    }
    console.log(response, "Доставка");
  });
}

// export function getGifts({ commit, rootGetters }, { order_id }) {
//   axios
//     .post(
//       `https://api.bot-t.com/v1/shopcart/discount/for-order?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
//       createParams(
//         ["order_id"],
//         {
//           bot_id: rootGetters["user/viewUser"].bot_data.id,
//         },
//         order_id
//       )
//     )
//     .then((response) => {
//       console.log(response, "подарки");

//       // commit("changeCategory", categoryes);
//     });
// }

// export function getReferalBalance({ commit, rootGetters }, { order_id }) {
//   axios
//     .post(
//       `https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
//       createParams(
//         ["order_id"],
//         {
//           bot_id: rootGetters["user/viewUser"].bot_data.id,
//           user_id: rootGetters["user/viewUser"].data.id,
//           secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
//         },
//         order_id
//       )
//     )
//     .then((response) => {
//       console.log(response, "Баланс");

//       // commit("changeCategory", categoryes);
//     });
// }

export function getСoupon({ commit, rootGetters }, { action, coupon }) {
  commit("changeCouponLoading", { section: action, value: true });
  request(
    `shoppublic/coupon/${action}?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
    {
      bot_id: rootGetters["user/viewUser"].bot_data.id,
      user_id: rootGetters["user/viewUser"].data.id,
      secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
      code: coupon,
    }
  ).then((response) => {
    if (response.data.result) {
      commit("changeCouponLoading", { section: action, value: false });
      if (action == "activate") {
        if (response.data.result) {
          commit("changeFormData", {
            section: "coupon",
            data: response.data.data,
          });
          commit("changeCouponValidate", { section: "status", value: false });
        } else {
          commit("changeCouponValidate", { section: "current", value: true });
        }
      } else if (action == "find-active") {
        if (response.data.result) {
          commit("changeFormData", {
            section: "coupon",
            data: response.data.data,
          });
        } else {
          commit("changeCouponValidate", { section: "status", value: true });
        }
      } else if (action == "deactivated") {
        commit("changeCouponValidate", { section: "status", value: true });
        commit("changeCouponValidate", { section: "current", value: false });
      }
    }
    console.log(response, "Купон");
  });
}

// export function formAnswers({ commit, rootGetters }, { action, type, data }) {
//   axios
//     .post(
//       `https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
//       createParams(
//         ["order_id"],
//         {
//           bot_id: rootGetters["user/viewUser"].search.bot_id,
//           user_id: rootGetters["user/viewUser"].data.id,
//           secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
//         },
//         order_id
//       )
//     )
//     .then((response) => {
//       console.log(response, "Баланс");

//       // commit("changeCategory", categoryes);
//     });
// }
