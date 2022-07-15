import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import WebAppBott from "./modules/WebAppBott.js";
import basket from "./modules/Basket";
import order from "./modules/Order";
import user from "./modules/User";
import info from "./modules/Info";
import form from "./modules/Form";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      WebAppBott,
      basket,
      order,
      info,
      user,
      form,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
