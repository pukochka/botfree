//-------------------------------------------------------
export function changeOrdersData(state, orders) {
  if (this.state.user.user.bot_data.type.id !== 7) {
    state.orders.data = [orders];
  } else {
    state.orders.data = orders;
  }
  console.log(state.orders.data);
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
export function createNewOrder(state, value) {
  state.newOrder = value;
}
//-------------------------------------------------------
