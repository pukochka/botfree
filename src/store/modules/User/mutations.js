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
export function SaveBotData(state, config) {
  state.user.bot_data = config;
  this.dispatch("products/getProducts", { category: 0, text: "" });
}
//-------------------------------------------------------
export function signWithWebsite(state) {
  for (const [key, value] of new URLSearchParams(window.location.search)) {
    state.user.init_telegram[key] = value;
  }
  this.dispatch("user/getUserData", state.user.init_telegram.id);
}
export function signWithTelegram(state) {
  let init = convertURL(window.Telegram.WebApp.initData);
  init.user = JSON.parse(init.user);
  state.user.init_telegram = init;
  this.dispatch("user/getUserData", state.user.init_telegram.user.id);
}
//-------------------------------------------------------
export function changeColor(state, { text, background, add, id }) {
  setCssVar(
    "primary",
    state.user.theme.is_dark ? background.dark : background.light
  );
  setCssVar("secondary", state.user.theme.is_dark ? text.dark : text.light);
  setCssVar("accent", state.user.theme.is_dark ? add.dark : add.light);
  state.user.colors.map((item) => (item.select = false));
  state.user.colors.filter((item) => item.id == id)[0].select = true;
}
//-------------------------------------------------------
export function changeUserTheme(state) {
  state.user.theme.is_dark = !state.user.theme.is_dark;
  const { background, text, add } = state.user.colors.filter(
    (item) => item.select === true
  )[0];
  setCssVar(
    "primary",
    state.user.theme.is_dark ? background.dark : background.light
  );
  setCssVar("secondary", state.user.theme.is_dark ? text.dark : text.light);
  setCssVar("accent", state.user.theme.is_dark ? add.dark : add.light);
}
//-------------------------------------------------------
export function SetGuest(state, value) {
  state.user.no_guest = value;
}
//-------------------------------------------------------
export function SetError(state, value) {
  state.user.error = value;
}
//-------------------------------------------------------
export function changeDialogs(state, section) {
  state.dialogs[section] = !state.dialogs[section];
}
//-------------------------------------------------------
export function changeLoading(state, { section, value }) {
  state.user.loading[section] = value;
}
//-------------------------------------------------------
export function test(state, number) {
  state.user.bot_data.type.id = number;
}
