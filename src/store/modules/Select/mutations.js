export function changeSelectProduct(state, value) {
  state.data = value;
  state.tab = "select";
}
export function changeSelectTab(state, value) {
  state.tab = value;
}
