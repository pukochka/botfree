import { ref } from "vue";
export default function () {
  return {
    user: ref({
      init_telegram: {},
      status: false,
      data: {},
      search: {},
      warning: "",
      loading: true,
      tab: "catalog",
    }),
  };
}
