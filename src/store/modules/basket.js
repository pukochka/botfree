import axios from "axios";
export default {
  actions: {
    rnd({ commit /* dispatch , getters*/ }) {
      let rnd = Math.floor(Math.random() * 100);
      commit("increment", rnd);
    },
    getUserData() {
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
  },
  mutations: {
    increment(state, rnd) {
      state.count = state.count + rnd;
    },
  },
  getters: {
    show(state) {
      return state.count;
    },
  },
  state: {
    count: 0,
    userData: [],
  },
};
