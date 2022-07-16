//-------------------------------------------------------
export function changeFormData(state, { section, data }) {
  state[section].data = data;
}
//-------------------------------------------------------
export function changeFormLoading(state, { section, value }) {
  state[section].loading = value;
}
export function changeCouponLoading(state, { section, value }) {
  state.coupon.loading[section] = value;
}
//-------------------------------------------------------
export function changeFormSelect(state, { section, data, tab }) {
  state[section].tab = tab;
  state[section].select = data;
}
//-------------------------------------------------------
export function changeCouponValidate(state, { section, value }) {
  state.coupon[section] = value;
}
//-------------------------------------------------------
