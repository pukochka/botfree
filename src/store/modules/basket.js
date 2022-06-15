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
          if (response.status == 200) {
            commit("openUserData", response.data.data);
            dispatch("actionsWithBasket", { action: "get" });
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
        state.initData = data;
      }
    },
    toBasket(state, items) {
      state.basket = items;
    },
    openBasket(state) {
      state.dialBasket = !state.dialBasket;
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
    increaseCountInBasket(state, item) {
      state.basket.find((prod) => prod.data.id == item.id).count++;
    },
    decreaseCountInBasket(state, item) {
      state.basket.find((prod) => prod.data.id == item.id).count--;
      if (state.basket.find((prod) => prod.data.id == item.id).count < 1) {
        state.basket = state.basket.filter((prod) => prod.data.id != item.id);
        Notify.create({
          message: `Товар ${item.design.title} удален из корзины`,
          color: "red-3",
          position: "top",
          timeout: 1000,
        });
      }
    },
    addInBasket(state, item) {
      state.basket.push({
        count: 1,
        data: item,
      });
      Notify.create({
        message: `Товар ${item.design.title} добавлен в корзину`,
        color: "orange-3",
        position: "top",
        timeout: 1000,
      });
    },
  },
  getters: {
    viewUserData(state) {
      return state.userData;
    },
    open(state) {
      return state.dialBasket;
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
    getInitData(state) {
      return state.initData;
    },
  },
  state: {
    basket: ref([]),
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
