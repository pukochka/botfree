//-------------------------------------------------------
export function changeProductsData(state, { items, category }) {
  state.products.data = items;
  state.products.textPrev = state.products.textNow;
  state.products.textNow = category;
}
//-------------------------------------------------------
export function changeProductsLoading(state, value) {
  state.products.loading = value;
}
//-------------------------------------------------------
export function changeProductsCategory(state, value) {
  state.products.prev = state.products.now;
  state.products.now = value;
}
//-------------------------------------------------------
