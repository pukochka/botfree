import { ref } from "vue";

export default function () {
  return {
    digital: ref({
      order: {},
      select: {},
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
