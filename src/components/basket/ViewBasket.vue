<template>
  <NoAuthNotification v-if="!viewUser.no_guest" />
  <AuthBasket v-if="viewUser.no_guest" />
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters } from "vuex";
import AuthBasket from "./AuthBasket.vue";
import NoAuthNotification from "../NoAuthNotification.vue";

export default defineComponent({
  components: {
    NoAuthNotification,
    AuthBasket,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
  },
});
</script>
