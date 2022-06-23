import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import basket from "./modules/basket";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      basket,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
