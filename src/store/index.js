import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import basket from "./modules/Basket";
import order from "./modules/Order";
import user from "./modules/User";
import info from "./modules/Info";
import form from "./modules/Form";
import products from "./modules/Products";
import digital from "./modules/Digital";
import select from "./modules/Select";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      basket,
      order,
      info,
      user,
      form,
      products,
      digital,
      select,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
