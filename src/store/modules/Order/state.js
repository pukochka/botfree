import { ref } from "vue";
export default function () {
  return {
    orders: ref({
      data: [],
      loading: {
        index: false,
        create: false,
        cancel: false,
        "set-item": false,
      },
      select: {},
      count: 0,
      tab: "all",
    }),
  };
}
