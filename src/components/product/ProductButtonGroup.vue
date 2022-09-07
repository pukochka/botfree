<template>
  <NoAuthDigital
    v-if="viewUser.bot_data?.type?.id !== 7 && !viewUser.no_guest"
  />

  <DigitalGroup
    v-if="viewUser.no_guest && viewUser.bot_data?.type?.id !== 7"
    :product="prod"
  />

  <NoAuthCart v-if="!viewUser.no_guest && viewUser.bot_data?.type?.id === 7" />

  <CartGroup
    v-if="viewUser.no_guest && viewUser.bot_data?.type?.id === 7"
    :prod="prod"
  />
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import DigitalGroup from "src/components/product/sections/DigitalGroup.vue";
import NoAuthCart from "src/components/product/sections/NoAuthCart.vue";
import NoAuthDigital from "src/components/product/sections/NoAuthDigital.vue";
import CartGroup from "src/components/product/sections/CartGroup.vue";

export default defineComponent({
  components: {
    NoAuthDigital,
    NoAuthCart,
    DigitalGroup,
    CartGroup,
  },
  props: {
    prod: {
      type: Object,
    },
  },
  setup() {},
  computed: {
    ...mapGetters({
      viewUser: "user/viewUser",
    }),
  },
});
</script>