export default {
  actions: {
    rnd({ commit /* dispatch , getters*/ }) {
      let rnd = Math.floor(Math.random() * 100);
      commit("increment", rnd);
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
  },
};
