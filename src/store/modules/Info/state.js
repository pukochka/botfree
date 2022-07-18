import { ref } from "vue";
export default function () {
  return {
    info: ref({
      loading: {
        rules: false,
        sales: false,
        bot: false,
      },
      rules: [],
      sales: [],
      bot: [],
      dialogs: {
        order: {
          open: false,
          danger: false,
          name: "order",
        },
      },
    }),
  };
}
