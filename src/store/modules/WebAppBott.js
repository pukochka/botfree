import axios from "axios";
import { ref } from "vue";

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
            dispatch("basket/getBasket", { action: "get" });
            dispatch("order/getOrders", { action: "index", offset: 0 });
            dispatch("order/getOrdersCount");
          }
        });
    },
    getAllProducts({ commit, getters }, { category, text }) {
      axios
        .post(
          `https://api.bot-t.com/v1/shoppublic/category/view?secretKey=${getters.viewInitData.search.secretKey}`,
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

    changeBotInfo(state, val) {
      state.botInfo = val;
    },

    changeInfo(state, { select, value }) {
      state[select].value = value;
      state[select].loading = false;
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
    viewCoupon(state) {
      return state.coupons;
    },
    viewInfoSales(state) {
      return state.infoSales;
    },
    viewInfoRules(state) {
      return state.infoRules;
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

    viewInfoOrders(state) {
      return state.infoOrders;
    },
    viewInfoDialogs(state) {
      return state.infoDialogs;
    },
  },
  state: {
    tabs: ref("catalog"),
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

    botInfo: ref([]),
    infoSales: ref({
      value: null,
      loading: true,
    }),
    infoRules: ref({
      value: null,
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
