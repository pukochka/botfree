import { ref } from "vue";
export default function () {
  return {
    products: ref({
      data: [],
      now: 0,
      prev: 0,
      textNow: "",
      textPrev: "",
      loading: false,
    }),
  };
}
