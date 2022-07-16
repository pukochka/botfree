import { ref } from "vue";
export default function () {
  return {
    basket: ref({
      data: [],
      elem: 0,
      loading: {
        get: false,
        add: false,
        "set-count": false,
        subtract: false,
        remove: false,
        "remove-all": false,
      },
    }),
  };
}
