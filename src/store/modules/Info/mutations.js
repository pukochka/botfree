//-------------------------------------------------------
export function changeInfoData(state, { section, value }) {
  state.info[section] = value;
}
//-------------------------------------------------------
export function changeInfoloading(state, { section, value }) {
  state.info.loading[section] = value;
}
//-------------------------------------------------------
export function changeInfoDialogs(state, { section, value }) {
  state.info.dialogs.order.name = value;
  state.info.dialogs[section].open = !state.info.dialogs[section].open;
}
//-------------------------------------------------------
