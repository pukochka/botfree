import { ref } from "vue";

export default function () {
  return {
    payments: ref({
      data: [],
      loading: true,
      select: {},
      tab: "all",
    }),
    delivery: ref({
      data: [],
      loading: true,
      select: {},
      tab: "all",
    }),
    coupon: ref({
      data: [],
      status: false,
      current: false,
      loading: {
        "find-active": false,
        activate: false,
        deactivate: false,
      },
    }),
    formData: ref({
      delivery: ref({ fields: {}, checkboxes: {}, files: {} }),
      payments: {},
      referalBalance: {},
    }),
    referalBalance: ref({
      data: [],
      loading: true,
    }),
  };
}
