<template>
  <div class="max-xxl center">
    <q-btn
      class="q-mb-sm"
      flat
      icon="chevron_left"
      color="primary"
      @click="changeInfoCurrentOrder({ order: {}, page: 'all' })"
    />
    <q-separator />
    <div class="text-h6 q-py-sm">
      <div class="q-py-md">
        <div class="text-weight-bold">
          Номер заказа <span class="text-primary">#{{ current.id }}</span>
        </div>
        <q-separator />
        <div class="text-subtitle1">
          Заказ от <span class="text-primary">{{ current.created_at }}</span>
        </div>
      </div>
      <div class="q-py-md">
        <UsedCoupon :coupon="current.coupon" />
      </div>
      <div class="q-py-md">
        <UsedDiscount
          :item="{
            discount: current.discount,
            discounts: current.discounts,
          }"
        />
      </div>
      <div class="q-py-md">
        <UsedDelivery :delivery="current.delivery" />
      </div>
      <div class="q-py-md">
        <UsedPayment :payment="current.payment" />
      </div>

      <div class="text-weight-bold">
        Итого <span class="text-primary">{{ current.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import UsedCoupon from "src/components/order/OrderSections/UsedCoupon.vue";
import UsedDelivery from "src/components/order/OrderSections/UsedDelivery.vue";
import UsedDiscount from "src/components/order/OrderSections/UsedDiscount.vue";
import UsedPayment from "src/components/order/OrderSections/UsedPayment.vue";

export default defineComponent({
  props: ["current"],
  components: {
    UsedCoupon,
    UsedDelivery,
    UsedDiscount,
    UsedPayment,
  },
  setup() {
    return {};
  },
  methods: {
    ...mapMutations(["changeInfoCurrentOrder"]),
  },
});
</script>
<style lang="scss" scoped>
</style>