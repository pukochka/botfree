import { convertURL } from "src/store/helpers";
import verification from "src/telegram";
import { setCssVar } from "quasar";
//-------------------------------------------------------
export function changeUserProp(state, { section, value }) {
  state.user[section] = value;
}
//-------------------------------------------------------
export function changeUserTab(state, tab) {
  if (tab == "formsOrders") {
    this.state.info.info.dialogs.order.danger = true;
    state.user.tab = "formsOrders";
  } else {
    this.state.info.info.dialogs.order.danger = false;
    this.state.info.info.dialogs.order.open = false;
    state.user.tab = tab;
  }
}
//-------------------------------------------------------
export function initApp(state) {
  state.user.loading = true;
  state.user.init_telegram = convertURL(window.Telegram.WebApp.initData);
  state.user.search = convertURL(window.location.search);
  state.user.status = verification(state.user.init_telegram, state.user.search);

  if (!state.user.status) {
    state.user.search = {
      bot_id: 12845,
      secretKey:
        "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",
    };
    state.user.init_telegram = {
      user: {
        id: 1028741753,
      },
    };
    state.user.warning = "Пользователь не авторизован";
  } else {
    let init = state.user.init_telegram;
    init.user = JSON.parse(init.user);
    state.user.init_telegram = init;
    state.user.warning = "Пользователь авторизован";
  }
  console.warn(state.user.warning);
  this.dispatch("user/getUserData");
}
//-------------------------------------------------------
export function changeColor(state, { text, background, add, id }) {
  setCssVar("primary", background);
  setCssVar("secondary", text);
  setCssVar("accent", add);
  state.user.colors.map((item) => (item.select = false));
  state.user.colors.filter((item) => item.id == id)[0].select = true;
}
