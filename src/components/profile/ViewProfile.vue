<template>
  <NoAuthNotification v-if="!viewUser.no_guest" />
  <AuthProfile v-if="viewUser.no_guest" />
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

import AuthProfile from "./AuthProfile.vue";
import NoAuthNotification from "../NoAuthNotification.vue";
export default defineComponent({
  components: {
    NoAuthNotification,
    AuthProfile,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
  },
});
</script>