//------------------------------------------------------------
export function changeDigitalLoading(state, { section, value }) {
  state.digital.loading[section] = value;
}
//------------------------------------------------------------
export function changeDigitalData(state, value) {
  state.digital.order = value;
}
//------------------------------------------------------------
export function changeDigitalCount(state, value) {
  state.digital.count = value;
}
//------------------------------------------------------------
export function changeDigitalOrders(state, value) {
  state.digital.last = value;
}
