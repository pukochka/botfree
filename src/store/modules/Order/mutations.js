//-------------------------------------------------------
export function changeOrdersData(state, orders) {
  state.orders.data = orders;
}
//-------------------------------------------------------
export function changeOrdersSelect(state, { order, tab }) {
  state.orders.select = order;
  state.orders.tab = tab;
}
//-------------------------------------------------------
export function changeOrdersCount(state, count) {
  state.orders.count = count;
}
//-------------------------------------------------------
export function changeOrdersLoading(state, { section, value }) {
  state.orders.loading[section] = value;
}
//-------------------------------------------------------
