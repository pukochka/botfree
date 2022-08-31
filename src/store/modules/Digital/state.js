import { ref } from "vue";

export default function () {
  return {
    digital: ref({
      order: {},
      select: {},
      last: [],
      count: 0,
      loading: {
        create: false,
        get: false,
        index: false,
        count: false,
        cancel: false,
      },
    }),
  };
}
