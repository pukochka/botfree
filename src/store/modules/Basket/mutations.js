//-------------------------------------------------------
export function changeBasketData(state, items) {
  state.basket.data = items;
}
//-------------------------------------------------------
export function changeBasketLoading(state, { section, value, elem }) {
  if (elem != undefined) {
    state.basket.elem = elem;
  }
  state.basket.loading[section] = value;
}
//-------------------------------------------------------
