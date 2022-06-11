import axios from "axios";
import { ref } from "vue";
import { Notify } from "quasar";
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
    increaseCountInBasket(state, item) {
      state.basket.find((prod) => prod.data == item).count++;
    },
    decreaseCountInBasket(state, item) {
      state.basket.find((prod) => prod.data == item).count--;
      if (state.basket.find((prod) => prod.data == item).count < 1) {
        state.basket = state.basket.filter((prod) => prod.data != item);
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
    open(state) {
      return state.dialBasket;
    },
    userValid(state) {
      return state.userValidate;
    },
    allProducts(state) {
      return state.products;
    },
    viewBasket(state) {
      return state.basket;
    },
  },
  state: {
    basket: ref([]),
    userValidate: ref(false),
    dialBasket: ref(false),
    products: ref([]),
  },
};
