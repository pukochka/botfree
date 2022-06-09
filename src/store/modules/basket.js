import axios from "axios";
import { ref } from "vue";

export default {
  actions: {
    getUserData({ commit }) {
      axios
        .post(
          `https://api.bot-t.ru/v1/bot/user/view-by-telegram-id?secretKey=db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e`,
          {
            bot_id: 12845,
            telegram_id: 1028741753,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
    viewAllProducts({ commit }, category = 0) {
      axios
        .post(
          `https://api.bot-t.ru/v1/shoppublic/category/view?secretKey=db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e`,
          {
            bot_id: 12845,
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
    viewChosenCategory({ commit, dispatch }, category) {
      dispatch("viewAllProducts", category.id);
    },
  },
  mutations: {
    openBasket(state) {
      state.dialBasket = !state.dialBasket;
    },
    changeValidator(state, value) {
      state.userValidate = value;
    },
    viewCategory(state, categoryes) {
      state.products = categoryes;
    },
  },
  getters: {
    open(state) {
      return state.dialBasket;
    },
    userValid(state) {
      return state.userValidate;
    },
    allProducts(state) {
      return state.products;
    },
  },
  state: {
    count: 0,
    userValidate: ref(false),
    dialBasket: ref(false),
    products: ref([]),
  },
};
