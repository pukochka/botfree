<template>
  <div class="max-xxl center q-px-md q-pt-lg">
    <div class="flex">
      <div class="text-h4">Мои заказы</div>
      <div class="text-grey-8 text-caption self-end q-ml-sm">
        Заказы {{ viewInfoOrders.count }}
      </div>
    </div>
    <q-separator class="q-mt-sm" />
  </div>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4 text-center q-pa-lg" v-if="viewInfoOrders.length == 0">
      Заказов пока нет
    </div>
    <div
      class="bg-grey-1 rounded-borders column q-my-md"
      v-for="(order, index) of viewOrders"
      :key="index"
    >
      <div class="q-pa-md">
        <div class="text-weight-bold">Заказ от {{ order.created_at }}</div>
        <div class="text-weight-bold text-primary">#{{ order.id }}</div>
        <div class="text-weight-bold">{{ order.status }}</div>
        <div class="text-weight-bold">Итого {{ order.price }}</div>
      </div>
      <q-separator />
      <div class="q-pa-md">
        <order-item :order="order" />
      </div>
    </div>

    <div
      class="absolute-center flex justify-center fit bg-layout"
      v-if="viewInfoOrders.loading"
    >
      <q-spinner color="primary" class="q-ma-xl" size="3em" />
    </div>

    <div class="max-xxl center flex justify-end q-pa-sm q-pb-md">
      <div class="flex no-wrap items-center q-gutter-sm">
        <q-btn
          :disable="page == 1"
          dense
          flat
          round
          color="primary"
          icon="chevron_left"
          @click="prevPage"
        />
        <div class="">{{ page }} из {{ countOfPages }}</div>
        <q-btn
          class="cursor-pointer"
          :disable="page == countOfPages"
          dense
          title=""
          flat
          round
          color="primary"
          icon="chevron_right"
          @click="nextPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

import orderItem from "src/components/order/productOrder.vue";
// import orderInfo from "src/components/order/orderInfo.vue";

export default defineComponent({
  components: {
    orderItem,
    // orderInfo,
  },
  setup() {
    const $q = useQuasar();
    const widthmd = computed(() => {
      return $q.screen.lt.md;
    });
    const widthsm = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      widthmd,
      widthsm,
      toggle: ref([false, false, false]),
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
    ...mapActions(["actionsWithOrders"]),
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
    nextPage() {
      this.actionsWithOrders({
        action: "index",
        offset: (this.offset += 3),
      });
      this.page++;
      window.scrollTo({ top: 0 });
    },
    prevPage() {
      this.actionsWithOrders({ action: "index", offset: (this.offset -= 3) });
      this.page--;
      window.scrollTo({ top: 0 });
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