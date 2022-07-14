import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import WebAppBott from "./modules/WebAppBott.js";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      WebAppBott,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
