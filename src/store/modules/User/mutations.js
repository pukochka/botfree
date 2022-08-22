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
//window.location.search в urlsearchparams
export function initApp(state) {
  console.log(window.location.search, window.location.href);
  // for (const [key, value] of new URLSearchParams(
  //   "&id=1028741753&first_name=Artemi&last_name=Puka&username=melart1&auth_date=1661095640&hash=8ab3454d2b4eae7d129246b2e00f0675a5bd71e1ccb0bfa8715e673ff46c836f"
  // )) {
  //   state.user.init_telegram[key] = value;
  // }
  // console.log(state.user.init_telegram);

  // state.user.status = verification(
  //   state.user.init_telegram,
  //   state.user.bot_data.secret_key
  // );

  // if (!state.user.status) {
  // state.user.search = {
  //   bot_id: 12845,
  //   secretKey:
  //     "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",
  // };
  // state.user.init_telegram = {
  //   user: {
  //     id: 1028741753,
  //   },
  // };
  // window.history.back();
  //   console.warn("Пользователь не прошел проверку!");
  // } else {
  //   let init = state.user.init_telegram;
  //   init.user = JSON.parse(init.user);
  //   state.user.init_telegram = init;
  //   console.warn("Авторизация прошла успешно!");
  // }

  // this.dispatch("user/getUserData");
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
    (item) => item.select == true
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
