import axios from "axios";
import { ref } from "vue";
import { setCssVar } from "quasar";
import { actionsBasket } from "boot/axios";

/*
  Actions : get | actions
  Getters : view
  Mutations : change | open 
*/

/*
  Структура всего проекта здесь
*/

const createParams = (items, params, ...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] != null || args[i] != undefined) {
      params[items[i]] = args[i];
    }
  }
  return params;
};

export default {
  actions: {
    getUserData({ commit, dispatch, getters }) {
      axios
        .post(
          `https://api.bot-t.com/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
            telegram_id: getters.viewInitData.data.user.id,
          }
        )
        .then((response) => {
          console.log(response, "Пользователь");
          if (response.status == 200) {
            commit("openUserData", response.data.data);
            dispatch("getBotInfo");
            dispatch("actionsWithBasket", { action: "get" });
            dispatch("actionsWithOrders", { action: "count" });
            dispatch("actionsWithOrders", { action: "index", offset: 0 });
          }
        });
    },
    getAllProducts({ commit, getters }, { category, text }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
            category_id: category,
          }
        )
        .then((response) => {
          console.log(response, "Витрина");
          let categoryes = [];
          for (let category in response.data.data) {
            categoryes.push(response.data.data[category]);
          }
          commit("changePrevCategory", { category, text });
          commit("changeCategory", categoryes);
        });
    },
    getBotInfo({ commit, getters }) {
      axios
        .post(
          `https://api.bot-t.com/v1/bot/main/info?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
          }
        )
        .then((response) => {
          console.log(JSON.parse(response.data).data, "инфо о боте");

          commit("changeBotInfo", JSON.parse(response.data).data);
        });
    },
    getGifts({ commit, getters }, { order_id }) {
      axios
        .post(
          `https://api.bot-t.com/v1/shopcart/discount/for-order?secretKey=${getters.viewInitData.search.secretKey}`,
          createParams(
            ["order_id"],
            {
              bot_id: getters.viewInitData.search.bot_id,
            },
            order_id
          )
        )
        .then((response) => {
          console.log(response, "подарки");

          // commit("changeCategory", categoryes);
        });
    },
    actionsWithInfo({ commit, getters }, { action }) {
      axios
        .post(
          `https://api.bot-t.com/v1/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
          }
        )
        .then((response) => {
          if (action == "shoppublic/shop/info") {
            commit("changeInfo", {
              select: "infoRules",
              value: response.data.data,
            });
          } else {
            commit("changeInfo", {
              select: "infoSales",
              value: response.data.data,
            });
          }
          console.log(response, "Правила и скидки");
        });
    },
    actionsDelivery({ commit, getters }, { action, id }) {
      axios
        .post(
          `https://api.bot-t.com/v1/shopcart/delivery/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          createParams(
            ["id"],
            {
              bot_id: getters.viewInitData.search.bot_id,
            },
            id
          )
        )
        .then((response) => {
          console.log(response, "Доставка");
          commit("changeDataDelivery", response.data.data);
        });
    },
    actionsСoupon({ commit, getters }, { action, coupon }) {
      if (action == "find-active") {
        commit("changeFirstLoadingCoupon", true);
      } else if (action == "activate") {
        commit("changeFindLoadingCoupon", true);
      }
      axios
        .post(
          `https://api.bot-t.ru/v1/shoppublic/coupon/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          createParams(
            ["code"],
            {
              bot_id: getters.viewInitData.search.bot_id,
              user_id: getters.viewUserData.id,
              secret_user_key: getters.viewUserData.secret_user_key,
            },
            coupon
          )
        )
        .then((response) => {
          console.log(response, "Купон");
          commit("changeFirstLoadingCoupon", false);
          commit("changeFindLoadingCoupon", false);
          if (action == "find-active") {
            commit("changeHasCoupon", response.data.result);
            if (response.data.result) {
              commit("changeActiveCoupon", response.data.data);
            }
          } else if (action == "activate") {
            if (response.data.result) {
              commit("changeActiveCoupon", response.data.data);
              commit("changeHasCoupon", response.data.result);
              commit("changeInCorrectCoupon", false);
            } else {
              commit("changeInCorrectCoupon", true);
            }
          } else if (action == "deactivated") {
            commit("changeActiveCoupon", response.data.data);
            commit("changeInCorrectCoupon", false);
          }
        });
    },
    actionsWithBasket({ commit, getters }, { action, category_id, count }) {
      axios
        .post(
          `https://api.bot-t.com/v1/shopcart/cart/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          createParams(
            ["category_id", "count"],
            {
              bot_id: getters.viewInitData.search.bot_id,
              user_id: getters.viewUserData.id,
              secret_user_key: getters.viewUserData.secret_user_key,
            },
            category_id,
            count
          )
        )
        .then((response) => {
          console.log(response, "Корзина");

          commit("changeBasket", response.data.data);
        });
    },
    actionsWithOrders({ commit, getters }, { action, order_id, offset }) {
      if (action == "index") {
        commit("changeInfoOrdersLoading", true);
      }
      axios
        .post(
          `https://api.bot-t.ru/v1/shopcart/order/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          createParams(
            ["order_id", "offset"],
            {
              bot_id: getters.viewInitData.search.bot_id,
              user_id: getters.viewUserData.id,
              secret_user_key: getters.viewUserData.secret_user_key,
            },
            order_id,
            offset
          )
        )
        .then((response) => {
          if (response.status == 200) {
            if (action == "count") {
              console.log(response, "Количество заказов");
              commit("changeInfoOrders", response.data.data.count);
            } else {
              console.log(response, "Заказы");
              commit("changeInfoOrdersLoading", false);
              commit("changeOrders", response.data.data);
            }
          }
        });
    },
  },
  mutations: {
    changeInitData(state, data) {
      if (data.search == "" || data.data == "") {
        state.initData = {
          data: {
            user: {
              id: 1028741753,
            },
          },
          search: {
            bot_id: 12845,
            secretKey:
              "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",
          },
        };
      } else {
        let init = data;
        init.data.user = JSON.parse(data.data.user);
        state.initData = init;
      }
    },
    changeBasket(state, items) {
      state.basket = items;
    },
    changeOrders(state, items) {
      state.orders = items;
    },

    changeBotInfo(state, val) {
      state.botInfo = val;
    },

    changeHasCoupon(state, val) {
      state.coupons.has = val;
    },
    changeActiveCoupon(state, val) {
      state.coupons.data = val;
    },
    changeInCorrectCoupon(state, val) {
      state.coupons.correct = val;
    },
    changeFirstLoadingCoupon(state, val) {
      state.coupons.loadingFirst = val;
    },
    changeFindLoadingCoupon(state, val) {
      state.coupons.loadingFind = val;
    },

    changeDataDelivery(state, val) {
      state.delivery.data = val;
    },

    changeInfo(state, { select, value }) {
      state[select].value = value;
      state[select].loading = false;
    },
    changeInfoOrders(state, count) {
      state.infoOrders.count = count;
    },
    changeInfoOrdersLoading(state, value) {
      state.infoOrders.loading = value;
    },
    changeValidator(state, value) {
      state.userValidate = value;
    },
    changeInitLoading(state, value) {
      state.initLoading = value;
    },
    changeCategory(state, categoryes) {
      state.products = categoryes;
    },
    changeTabs(state, view) {
      if (view == "formsOrders") {
        state.infoDialogs.createOrder.danger = true;
        state.tabs = "formsOrders";
      } else {
        state.infoDialogs.createOrder.danger = false;
        state.infoDialogs.createOrder.open = false;
        state.tabs = view;
      }
    },
    changeInfoDialogs(state, { dialog, view }) {
      state.infoDialogs.createOrder.value = view;
      state.infoDialogs[dialog].open = !state.infoDialogs[dialog].open;
    },
    changeCoupon(state, data) {
      state.coupon = data;
    },

    changeInfoDialogsValue(state, val) {
      state.tabs = val;
    },
    changePrevCategory(state, { category, text }) {
      state.prevCategory.prev = state.prevCategory.now;
      state.prevCategory.textPrev = state.prevCategory.textNow;
      state.prevCategory.now = category;
      state.prevCategory.textNow = text;
    },
    openUserData(state, value) {
      state.userData = value;
    },
  },
  getters: {
    viewBotInfo(state) {
      return state.botInfo;
    },
    viewPrevCategory(state) {
      return state.prevCategory;
    },
    viewDelivery(state) {
      return state.delivery;
    },
    viewCoupon(state) {
      return state.coupons;
    },
    viewInfoSales(state) {
      return state.infoSales;
    },
    viewInfoRules(state) {
      return state.infoRules;
    },
    viewColor(state) {
      return state.colors;
    },
    viewTab(state) {
      return state.tabs;
    },
    viewUserData(state) {
      return state.userData;
    },
    viewUserValid(state) {
      return state.userValidate;
    },
    viewAllProducts(state) {
      return state.products;
    },
    viewInitLoading(state) {
      return state.initLoading;
    },
    viewInitData(state) {
      return state.initData;
    },
    viewBasket(state) {
      return state.basket;
    },
    viewOrders(state) {
      return state.orders;
    },
    viewInfoOrders(state) {
      return state.infoOrders;
    },
    viewInfoDialogs(state) {
      return state.infoDialogs;
    },
  },
  state: {
    tabs: ref("catalog"),
    basket: ref([]),
    orders: ref([]),
    products: ref([]),
    infoDialogs: ref({
      createOrder: {
        open: false,
        danger: false,
        value: "createOrder",
      },
    }),
    gifts: ref({
      data: [],
      loading: true,
    }),
    coupons: ref({
      has: true,
      loadingFirst: false,
      loadingFind: false,
      correct: false,
      data: [],
    }),
    delivery: ref({
      data: [],
      loading: true,
    }),
    botInfo: ref([]),
    infoSales: ref({
      value: null,
      loading: true,
    }),
    infoRules: ref({
      value: null,
      loading: true,
    }),
    infoOrders: ref({
      count: 0,
      loading: true,
    }),
    prevCategory: ref({
      now: 0,
      prev: 0,
      textNow: "",
      textPrev: "",
    }),
    userValidate: ref(false),
    initLoading: ref(true),
    userData: ref({}),
    initData: ref({
      data: {},
      search: {},
    }),
  },
};
