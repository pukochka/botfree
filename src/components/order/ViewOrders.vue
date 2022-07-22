<template>
  <div class="">
    <q-tab-panels
      :class="themeColor"
      v-model="viewOrders.tab"
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-tab-panel name="all">
        <AllOrders />
      </q-tab-panel>
      <q-tab-panel name="selected">
        <CurrentOrder :select="viewOrders.select" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script>
import { ref, defineComponent, computed } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import AllOrders from "src/components/order/AllOrders.vue";
import CurrentOrder from "src/components/order/CurrentOrder.vue";

export default defineComponent({
  components: {
    AllOrders,
    CurrentOrder,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({
      viewOrders: "order/viewOrders",
      viewUser: "user/viewUser",
    }),
    themeColor() {
      return this.viewUser.theme.is_dark ? "bg-dark" : "bg-white";
    },
  },
});
</script>
<style lang="scss" scoped>
</style>