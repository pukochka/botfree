import { ref } from "vue";

export default function () {
  return {
    loading: ref(false),
    data: ref({}),
    tab: "all",
  };
}
