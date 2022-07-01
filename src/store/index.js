import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import app from "./modules/app.js";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      app,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
