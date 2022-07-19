<template>
  <div class="q-pa-md" v-if="viewOrders.loading['set-item']">
    <q-spinner color="primary" size="4rem" />
  </div>
  <div class="" v-if="!viewOrders.loading['set-item']">
    {{ viewPayments.select }}
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    ...mapGetters({
      viewOrders: "order/viewOrders",
      viewPayments: "form/viewPayments",
    }),
  },
  mounted() {},
});
</script>
<style lang="scss" scoped>
</style>