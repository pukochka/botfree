<template>
  <div class="text-subtitle1 text-orange">
    Внимание после выбора доставки, Вас перенаправит в бота!
  </div>
  <div class="q-my-sm">
    <DigitalCoupon />
  </div>
  <div class="q-my-sm">
    <DigitalSales />
  </div>
  <div class="flex justify-between q-px-md">
    <div class="text-secondary text-weight-bold text-h6">Итого</div>
    <div class="text-secondary text-weight-bold text-h6">2999</div>
  </div>
  <q-separator color="secondary" class="q-mx-md" />
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import DigitalCoupon from "./DigitalCoupon.vue";
import DigitalSales from "./DigitalSales.vue";

export default defineComponent({
  components: {
    DigitalCoupon,
    DigitalSales,
  },
  setup() {
    return {};
  },
});
</script>