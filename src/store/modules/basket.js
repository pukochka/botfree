import axios from "axios";
import { ref } from "vue";
import { Notify } from "quasar";

export default {
  actions: {
    getUserData({ commit, dispatch, getters }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.getInitData.search.secretKey}`,
          {
            bot_id: getters.getInitData.search.bot_id,
            telegram_id: getters.getInitData.data.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            commit("openUserData", response.data.data);
            dispatch("actionsWithBasket", { action: "get" });
            dispatch("actionsWithOrders", { action: "profile", offset: 0 });
          }
        });
    },
    viewAllProducts({ commit, getters }, category = 0) {
      axios
        .post(
          `https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=${getters.getInitData.search.secretKey}`,
          {
            bot_id: getters.getInitData.search.bot_id,
            category_id: category,
          }
        )
        .then((response) => {
          console.log(response);
          let categoryes = [];
          for (let category in response.data.data) {
            categoryes.push(response.data.data[category]);
          }
          commit("viewCategory", categoryes);
        });
    },
    actionsWithBasket({ commit, getters }, { action, category_id, count }) {
      function isParams(...args) {
        let arg = ["category_id", "count"];
        let params = {
          bot_id: getters.getInitData.search.bot_id,
          user_id: getters.viewUserData.id,
          secret_user_key: getters.viewUserData.secret_user_key,
        };
        for (let i = 0; i < args.length; i++) {
          if (args[i] != null || args[i] != undefined) {
            params[arg[i]] = args[i];
          }
        }
        console.log(params);
        return params;
      }
      axios
        .post(
          `https://api.bot-t.ru/v1/shopcart/cart/${action}?secretKey=${getters.getInitData.search.secretKey}`,
          isParams(category_id, count)
        )
        .then((response) => {
          console.log(response);
          commit("toBasket", response.data.data.items);
        });
    },
    actionsWithOrders({ commit, getters }, { action, order_id, offset }) {
      function isParams(...args) {
        let arg = ["order_id", "offset"];
        let params = {
          bot_id: getters.getInitData.search.bot_id,
          user_id: getters.viewUserData.id,
          secret_user_key: getters.viewUserData.secret_user_key,
        };
        for (let i = 0; i < args.length; i++) {
          if (args[i] != null || args[i] != undefined) {
            params[arg[i]] = args[i];
          }
        }
        console.log(params);
        return params;
      }
      axios
        .post(
          `https://api.bot-t.ru/v1/shopcart/order/${action}?secretKey=${getters.getInitData.search.secretKey}`,
          isParams(order_id, offset)
        )
        .then((response) => {
          console.log(response);
          commit("getOrders", response.data.data.orders);
        });
    },
    viewChosenCategory({ commit, dispatch }, category) {
      dispatch("viewAllProducts", category.id);
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
    toBasket(state, items) {
      state.basket = items;
    },
    getOrders(state, items) {
      state.orders = items;
    },
    openBasket(state) {
      state.dialBasket = !state.dialBasket;
    },
    openOrder(state) {
      state.dialOrder = !state.dialOrder;
    },
    changeValidator(state, value) {
      state.userValidate = value;
    },
    changeInitLoading(state, value) {
      state.initLoading = value;
    },
    openUserData(state, value) {
      state.userData = value;
    },
    viewCategory(state, categoryes) {
      state.products = categoryes;
    },
  },
  getters: {
    viewUserData(state) {
      return state.userData;
    },
    open(state) {
      return state.dialBasket;
    },
    dialViewOrder(state) {
      return state.dialOrder;
    },
    userValid(state) {
      return state.userValidate;
    },
    allProducts(state) {
      return state.products;
    },
    viewInitLoading(state) {
      return state.initLoading;
    },
    viewBasket(state) {
      return state.basket;
    },
    viewOrders(state) {
      return state.orders;
    },
    getInitData(state) {
      return state.initData;
    },
  },
  state: {
    basket: ref([]),
    orders: ref([]),
    dialOrder: ref(false),
    userValidate: ref(false),
    dialBasket: ref(false),
    products: ref([]),
    colorScheme: ref(true),
    userData: ref({}),
    initLoading: ref(true),
    initData: ref({
      data: {},
      search: {},
    }),
  },
};
