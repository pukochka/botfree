import axios from "axios";
import { ref } from "vue";

/*
  Actions : get | actions
  Getters : view
  Mutations : change | open 
*/

export default {
  actions: {
    getUserData({ commit, dispatch, getters }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/bot/user-key/view-by-telegram-id?secretKey=${getters.viewInitData.search.secretKey}`,
          {
            bot_id: getters.viewInitData.search.bot_id,
            telegram_id: getters.viewInitData.data.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            commit("openUserData", response.data.data);
            dispatch("actionsWithBasket", { action: "get" });
            dispatch("actionsWithOrders", { action: "count" });
            dispatch("actionsWithOrders", { action: "index", offset: 0 });
          }
        });
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
          console.log(response);
          let categoryes = [];
          for (let category in response.data.data) {
            categoryes.push(response.data.data[category]);
          }
          commit("changeCategory", categoryes);
        });
    },
    getChosenCategory({ commit, dispatch }, category) {
      dispatch("getAllProducts", category.id);
    },
    actionsWithBasket({ commit, getters }, { action, category_id, count }) {
      function isParams(...args) {
        let arg = ["category_id", "count"];
        let params = {
          bot_id: getters.viewInitData.search.bot_id,
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
          `https://api.bot-t.ru/v1/shopcart/cart/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          isParams(category_id, count)
        )
        .then((response) => {
          console.log(response);

          commit("changeBasket", response.data.data.items);
        });
    },
    actionsWithOrders({ commit, getters }, { action, order_id, offset }) {
      function isParams(...args) {
        let arg = ["order_id", "offset"];
        let params = {
          bot_id: getters.viewInitData.search.bot_id,
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
      if (action == "index") {
        commit("changeInfoOrdersLoading", true);
      }
      axios
        .post(
          `https://api.bot-t.ru/v1/shopcart/order/${action}?secretKey=${getters.viewInitData.search.secretKey}`,
          isParams(order_id, offset)
        )
        .then((response) => {
          if (response.status == 200) {
            if (action == "count") {
              console.log(response);
              commit("changeInfoOrders", response.data.data.count);
            } else {
              console.log(response);
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
    openBasket(state) {
      state.dialBasket = !state.dialBasket;
    },
    openOrder(state) {
      state.dialOrder = !state.dialOrder;
    },
    openDialForm(state) {
      state.dialForm = !state.dialForm;
    },
    openUserData(state, value) {
      state.userData = value;
    },
  },
  getters: {
    viewUserData(state) {
      return state.userData;
    },
    viewDialBasket(state) {
      return state.dialBasket;
    },
    viewDialOrder(state) {
      return state.dialOrder;
    },
    viewDialForm(state) {
      return state.dialForm;
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
    basket: ref([]),
    orders: ref([]),
    products: ref([]),
    infoOrders: ref({
      count: 0,
      loading: true,
    }),
    dialOrder: ref(false),
    dialForm: ref(false),
    dialBasket: ref(false),
    userValidate: ref(false),
    initLoading: ref(true),
    userData: ref({}),
    selectCategoryView: ref(0),
    initData: ref({
      data: {},
      search: {},
    }),
  },
};
