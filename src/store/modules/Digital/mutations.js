//------------------------------------------------------------
export function changeDigitalLoading(state, { section, value }) {
  state.digital.loading[section] = value;
}
//------------------------------------------------------------
export function changeDigitalData(state, value) {
  state.digital.order = value;
}
//------------------------------------------------------------
export function changeDigitalSelect(state, value) {
  state.digital.select = value;
}
