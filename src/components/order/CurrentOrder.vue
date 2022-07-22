<template>
  <div class="max-xxl center">
    <q-btn
      class="q-mb-sm"
      flat
      icon="chevron_left"
      color="secondary"
      @click="changeOrdersSelect({ order: {}, tab: 'all' })"
    />
    <q-separator :dark="viewUser.theme.is_dark" />
    <div class="text-h6 q-py-sm">
      <div class="q-py-md">
        <div class="text-weight-bold text-secondary">
          Номер заказа <span class="">#{{ select.id }}</span>
        </div>
        <q-separator :dark="viewUser.theme" />
        <div class="text-subtitle1 text-secondary">
          Заказ от <span class="">{{ select.created_at }}</span>
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

      <div class="text-weight-bold text-secondary">
        Итого <span class="text-secondary">{{ select.price }}</span>
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
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
  },
  methods: {
    ...mapMutations({ changeOrdersSelect: "order/changeOrdersSelect" }),
  },
});
</script>
<style lang="scss" scoped>
</style>