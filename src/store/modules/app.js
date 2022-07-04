import axios from "axios";
import { ref } from "vue";
import { setCssVar } from "quasar";
import { actionsBasket } from "boot/axios";

/*
  Actions : get | actions
  Getters : view
  Mutations : change | open 
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
      try {
        axios
          .post(
            `https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.viewInitData.search.secretKey}`,
            {
              bot_id: getters.viewInitData.search.bot_id,
              telegram_id: getters.viewInitData.data.user.id,
            }
          )
          .then((response) => {
            console.log(response, "Пользователь");
            if (response.status == 200) {
              commit("openUserData", response.data.data);
              dispatch("actionsWithBasket", { action: "get" });
              dispatch("actionsWithOrders", { action: "count" });
              dispatch("actionsWithOrders", { action: "index", offset: 0 });
              // actionsBasket({
              //   url: "get",
              //   secret: getters.viewInitData.search.secretKey,
              //   post: {
              //     bot_id: getters.viewInitData.search.bot_id,
              //     user_id: getters.viewUserData.id,
              //     secret_user_key: getters.viewUserData.secret_user_key,
              //   },
              // }).then((response) => console.log(response));
            }
          });
      } catch {
        console.log("Пользователь не авторизован");
      }
    },
    getAllProducts({ commit, getters }, category = 0) {
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
          commit("changeCategory", categoryes);
        });
    },
    actionsWithInfo({ commit, getters }, { action }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/shoppublic/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
          }
        )
        .then((response) => {
          if (action == "shop/info") {
            commit("changeInfoRules", {
              rules: null,
              val: true,
            });
            commit("changeInfoRules", {
              rules: response.data.data,
              val: false,
            });
          } else {
            commit("changeInfoSales", {
              sales: null,
              val: true,
            });
            commit("changeInfoSales", {
              sales: response.data.data,
              val: false,
            });
          }
          console.log(response, "Правила и скидки");
        });
    },
    actionsWithСoupon({ commit, getters }, { action, coupon }) {
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
        });
    },
    actionsWithBasket({ commit, getters }, { action, category_id, count }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/shopcart/cart/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
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

          commit("changeBasket", response.data.data.items);
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
    changeInfoSales(state, { sales, val }) {
      if (val) {
        state.infoSales.loading = !val;
      } else {
        state.infoSales.value = sales;
      }
    },
    changeInfoRules(state, { rules, val }) {
      if (val) {
        state.infoRules.loading = !val;
      } else {
        state.infoRules.value = rules;
      }
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
    changeCategoryView(state, view) {
      state.selectCategoryView = view;
    },
    changeTabs(state, view) {
      state.tabs = view;
    },
    changeCoupon(state, data) {
      state.coupon = data;
    },
    changeColor(state, color) {
      state.colors.forEach((item) => (item.selected = false));
      state.colors.find((item) => item.value == color.value).selected = true;
      setCssVar("primary", color.value);
    },
    openUserData(state, value) {
      state.userData = value;
    },
  },
  getters: {
    viewCoupon(state) {
      return state.coupon;
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
    viewSelectCategory(state) {
      return state.selectCategoryView;
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
  },
  state: {
    tabs: ref("catalog"),
    basket: ref([]),
    orders: ref([]),
    products: ref([]),
    coupons: ref({
      loading: true,
      data: [],
    }),
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
    userValidate: ref(false),
    initLoading: ref(true),
    userData: ref({}),
    selectCategoryView: ref(0),
    initData: ref({
      data: {},
      search: {},
    }),
    colors: ref([
      {
        selected: false,
        value: "teal",
      },
      {
        selected: false,
        value: "red",
      },
      {
        selected: false,
        value: "pink",
      },
      {
        selected: false,
        value: "purple",
      },
      {
        selected: false,
        value: "indigo",
      },
      {
        selected: false,
        value: "orange",
      },
    ]),
  },
};
