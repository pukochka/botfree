import axios from "axios";
import {
  createParams,
  createFormFields,
  createFormCheckBoxes,
  createFormFiles,
} from "src/store/helpers.js";

export function getPayments(
  { commit, rootGetters },
  { action, group_id, order_id }
) {
  commit("changeFormLoading", { section: "payments", value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/common/money/payment/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["group_id", "order_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
        },
        group_id,
        order_id
      )
    )
    .then((response) => {
      if (response.status === 200) {
        if (action != "set-item") {
          commit("changeFormData", {
            section: "payments",
            data: response.data.data[0].groups,
          });
          commit("changeFormLoading", { section: "payments", value: false });
        } else {
          commit("form/changeFormSelect", {
            section: "payments",
            data: response.data.data,
          });
          commit("order/changeOrdersLoading", {
            section: action,
            value: false,
          });
        }
      }
      console.log(response.data.data[0], "Оплата");
    });
}

export function getDelivery({ commit, rootGetters }, { action, order_id }) {
  commit("changeFormLoading", { section: "delivery", value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/delivery/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
        },
        order_id
      )
    )
    .then((response) => {
      if (response.status === 200) {
        if (action != "set-delivery") {
          commit("changeFormData", {
            section: "delivery",
            data: response.data.data,
          });
          commit("createAnswerGroup", {
            section: "delivery",
            data: {
              fields: createFormFields(response.data.data),
              checkboxes: createFormCheckBoxes(response.data.data),
              files: createFormFiles(response.data.data),
            },
          });
          createFormFields(response.data.data, 1);
          commit("changeFormLoading", { section: "delivery", value: false });
        } else {
          let t = 0;
        }
      }
      console.log(response, "Доставка");
    });
}

export function getGifts({ commit, rootGetters }, { order_id }) {
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/discount/for-order?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
        },
        order_id
      )
    )
    .then((response) => {
      console.log(response, "подарки");

      // commit("changeCategory", categoryes);
    });
}

export function getReferalBalance({ commit, rootGetters }, { order_id }) {
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
          user_id: rootGetters["user/viewUser"].data.id,
          secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        },
        order_id
      )
    )
    .then((response) => {
      console.log(response, "Баланс");

      // commit("changeCategory", categoryes);
    });
}

export function getСoupon({ commit, rootGetters }, { action, coupon }) {
  commit("changeCouponLoading", { section: action, value: true });
  axios
    .post(
      `https://api.bot-t.com/v1/shoppublic/coupon/${action}?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["code"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
          user_id: rootGetters["user/viewUser"].data.id,
          secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        },
        coupon
      )
    )
    .then((response) => {
      if (response.status === 200) {
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

export function formAnswers({ commit, rootGetters }, { action, type, data }) {
  axios
    .post(
      `https://api.bot-t.com/v1/shopcart/order/use-balance?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      createParams(
        ["order_id"],
        {
          bot_id: rootGetters["user/viewUser"].search.bot_id,
          user_id: rootGetters["user/viewUser"].data.id,
          secret_user_key: rootGetters["user/viewUser"].data.secret_user_key,
        },
        order_id
      )
    )
    .then((response) => {
      console.log(response, "Баланс");

      // commit("changeCategory", categoryes);
    });
}
