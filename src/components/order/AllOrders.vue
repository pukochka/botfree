<template>
  <div class="max-xxl center q-px-md q-pt-lg">
    <div class="fixed-center" v-if="viewInfoOrders.loading">
      <div class="bg-white rounded-borders">
        <q-spinner color="primary" class="q-ma-xl" size="6em" />
      </div>
    </div>
    <div class="flex">
      <div class="text-h4">Мои заказы</div>
      <div class="text-grey-8 text-caption self-end q-ml-sm">
        Заказы {{ viewInfoOrders.count }}
      </div>
    </div>
    <q-separator class="q-mt-sm" />
  </div>
  <div class="max-xxl center q-pa-md">
    <div class="">Страница {{ page }} из {{ countOfPages }}</div>
    <div class="text-h4 text-center q-pa-lg" v-if="viewInfoOrders.length == 0">
      Заказов пока нет
    </div>
    <div
      class="bg-grey-2 rounded-borders q-my-md"
      v-for="(order, index) of viewOrders"
      :key="index"
    >
      <div class="q-px-md q-py-sm text-subtitle1">
        <div class="text-weight-bold">Заказ от {{ order.created_at }}</div>
        <div class="text-weight-bold">
          Номер <span class="text-primary">#{{ order.id }}</span>
        </div>
        <div class="text-weight-bold">
          Итого <span class="text-primary">{{ order.price }}</span>
        </div>
      </div>
      <q-separator class="q-mx-md" color="primary" />
      <div class="row q-col-gutter-sm q-pa-sm">
        <div
          class="col-12 col-md-4"
          v-for="(item, index) of order.items"
          :key="index"
        >
          <OrderProduct :item="item" />
        </div>
      </div>
      <div class="row justify-end q-px-sm q-pb-sm">
        <q-btn
          padding="4px 16px"
          flat
          color="primary"
          label="Повторить заказ"
        />
        <q-btn
          padding="4px 16px"
          flat
          color="primary"
          label="Подробнее"
          @click="moreAboutOrder(order)"
        />
      </div>
    </div>

    <div class="max-xxl center flex justify-end q-pa-sm q-pb-md">
      <div class="flex no-wrap items-center">
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

import OrderProduct from "src/components/order/OrderProduct.vue";

export default defineComponent({
  components: {
    OrderProduct,
  },
  setup() {
    return {
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
    ...mapMutations(["changeInfoCurrentOrder"]),
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
    moreAboutOrder(current) {
      this.changeInfoCurrentOrder({ order: current, page: "current" });
    },
    nextPage() {
      this.actionsWithOrders({
        action: "index",
        offset: (this.offset += 3),
      });
      this.page++;
    },
    prevPage() {
      this.actionsWithOrders({ action: "index", offset: (this.offset -= 3) });
      this.page--;
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