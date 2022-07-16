<template>
  <div class="max-xxl center">
    <q-btn
      class="q-mb-sm"
      flat
      icon="chevron_left"
      color="primary"
      @click="changeOrdersSelect({ order: {}, tab: 'all' })"
    />
    <q-separator />
    <div class="text-h6 q-py-sm">
      <div class="q-py-md">
        <div class="text-weight-bold">
          Номер заказа <span class="text-primary">#{{ select.id }}</span>
        </div>
        <q-separator />
        <div class="text-subtitle1">
          Заказ от <span class="text-primary">{{ select.created_at }}</span>
        </div>
      </div>
      <div class="q-py-md">
        <UsedCoupon :coupon="select.coupon" />
      </div>
      <div class="q-py-md">
        <UsedDiscount
          :item="{
            discount: select.discount,
            discounts: select.discounts,
          }"
        />
      </div>
      <div class="q-py-md">
        <UsedDelivery :delivery="select.delivery" />
      </div>
      <div class="q-py-md">
        <UsedPayment :payment="select.payment" />
      </div>

      <div class="text-weight-bold">
        Итого <span class="text-primary">{{ select.price }}</span>
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
  props: ["select"],
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
    ...mapMutations({ changeOrdersSelect: "order/changeOrdersSelect" }),
  },
});
</script>
<style lang="scss" scoped>
</style>