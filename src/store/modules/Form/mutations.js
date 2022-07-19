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
export function createAnswerGroup(state, { section, data }) {
  state.formData[section] = data;
}
//-------------------------------------------------------
export function changeFieldValue(state, { section, id, value }) {
  state.formData.delivery.fields.filter((item) => item.id == id)[0].value =
    value;
  console.log(state.formData[section]);
}
//-------------------------------------------------------
export function changeFileValue(state, { id, value }) {
  state.formData.delivery.files.filter((item) => item.id == id)[0].value =
    value;
  console.log(state.formData.delivery.files);
}
//-------------------------------------------------------
export function changeCheckBoxesValue(
  state,
  { is_multiple, id, option_id, value }
) {
  if (!is_multiple) {
    state.formData.delivery.checkboxes
      .filter((item) => item.id == id)
      .map((checkbox) => {
        checkbox.value = false;
      });
  }

  state.formData.delivery.checkboxes.filter(
    (item) => item.option_id == option_id
  )[0].value = !state.formData.delivery.checkboxes.filter(
    (item) => item.option_id == option_id
  )[0].value;
  console.log(state.formData.delivery.checkboxes);
}
