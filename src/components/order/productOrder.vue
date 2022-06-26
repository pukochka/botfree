<template>
  <div class="row">
    <div
      class="col-12 col-md-4"
      v-for="(item, index) of order.items"
      :key="index"
    >
      <item-order :item="item" />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import itemOrder from "src/components/order/orderItem.vue";

export default defineComponent({
  props: ["order"],
  components: {
    itemOrder,
  },
  setup() {
    return {
      toggle: ref(false),
      page: ref(1),
      offset: ref(0),
    };
  },
  computed: {
    ...mapGetters(["viewOrders", "viewInfoOrders"]),
    countOfPages() {
      return Math.ceil(this.viewInfoOrders.count / 3);
    },
  },
  methods: {
    convertСurrency(currency) {
      switch (currency) {
        case "RUB":
          return "₽";
        case "USD":
          return "$";
        case "EUR":
          return "€";
        case "UAH":
          return "₴";
        case "KZT":
          return "₸";
        default:
          return currency;
      }
    },
  },
  mounted() {},
  watch: {},
});
</script>
<style lang="scss" scoped>
.items-inner {
  flex: 250px 1 1;
}
.info {
  position: absolute;
  top: 3px;
  left: 3px;
  font-size: 12px;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
</style>