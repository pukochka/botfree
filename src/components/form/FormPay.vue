<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-md">Выберите способ оплаты</div>
    <q-tab-panels
      v-model="viewPayments.tab"
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-tab-panel name="all">
        <AllPayments />
      </q-tab-panel>
      <q-tab-panel name="selected">
        <SelectPayment :payment="viewPayments.select" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import AllPayments from "src/components/form/optionsTypePay/AllPayments.vue";
import SelectPayment from "src/components/form/optionsTypePay/SelectPayment.vue";
export default defineComponent({
  components: {
    SelectPayment,
    AllPayments,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({
      viewPayments: "form/viewPayments",
    }),
  },
  methods: {
    ...mapActions({
      getPayments: "form/getPayments",
    }),
  },
  mounted() {
    this.getPayments({ action: "view" });
  },
});
</script>
<style lang="scss" scoped>
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
</style>