<template>
  <div class="q-pa-md max-xxl center">
    <div class="fixed-center z-max">
      <div
        class="bg-white q-pa-md rounded-borders"
        v-if="viewBasket.loading['remove-all']"
      >
        <q-spinner color="primary" size="6rem" />
      </div>
    </div>
    <div class="my-header flex items-end">
      Корзина
      <div
        class="q-ml-sm text-caption text-grey-7"
        v-if="viewBasket.data.countItems != 0"
      >
        Товаров {{ viewBasket.data.countItems }}
      </div>
    </div>
    <q-separator class="q-my-sm" />
  </div>
  <q-card-actions align="right" class="max-xxl center">
    <q-btn
      v-if="viewBasket.data.countItems != 0"
      flat
      dense
      color="primary"
      icon="delete"
      label="Очистить корзину"
      @click="sure = !sure"
    />
  </q-card-actions>
  <q-card-section class="max-xxl center column">
    <div class="text-h5 column" v-if="viewBasket.data.countItems == 0">
      В корзине пока пусто
      <q-btn
        class="text-primary q-ma-md"
        rounded
        outline
        label="К товарам"
        @click="changeTabs('catalog')"
      />
    </div>
    <BasketProduct
      v-for="(item, index) of viewBasket.data.items"
      :key="index"
      :product="item.product"
    />
  </q-card-section>
  <q-card-section class="max-xxl center flex">
    <div class="max-md full-width">
      <q-card
        class="full-width relative-position bg-grey-2"
        v-if="viewBasket.data.countItems != 0"
      >
        <div
          class="absolute fit flex flex-center bg-opacity z-max"
          v-if="
            viewBasket.loading['subtract'] ||
            viewBasket.loading['remove'] ||
            viewBasket.loading['add'] ||
            viewBasket.loading['set-count']
          "
        >
          <q-spinner color="primary" size="5rem" class="z-max" />
        </div>
        <q-card-section class="">
          <div class="flex flex-grow justify-between text-h5 text-weight-bold">
            <div class="">Итого</div>
            <div class="">
              {{ viewBasket.data.sum }}
            </div>
          </div>
          <div class="flex flex-grow justify-between text-caption text-grey-7">
            <div class="">Всего товаров : {{ viewBasket.data.count }}</div>
            <div class="">
              {{ viewBasket.data.sum_full }}
            </div>
          </div>
          <div class="flex-grow q-mt-sm">
            <q-btn
              class="fit"
              color="primary"
              label="Перейти к оформлению"
              @click="toFormOrder"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card-section>
  <BasketDialogClear v-model="sure" />
  <OrderCreate />
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

import BasketDialogClear from "src/components/basket/BasketDialogClear.vue";
import BasketProduct from "src/components/basket/BasketProduct.vue";
import OrderCreate from "src/components/infoDialogs/OrderCreate.vue";

export default {
  props: {},
  components: {
    BasketProduct,
    BasketDialogClear,
    OrderCreate,
  },
  setup() {
    return {
      sure: ref(false),
    };
  },
  computed: {
    ...mapGetters({ viewBasket: ["basket/viewBasket"] }),
  },
  methods: {
    ...mapActions({ getBasket: "getBasket", getOrders: "order/getOrders" }),
    ...mapMutations(["changeTabs"]),
    toFormOrder() {
      // this.getOrders({ action: "create" });
      this.changeTabs("formsOrders");
    },
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
};
</script>
<style lang="scss" scoped>
.basket {
  position: fixed;
  bottom: 10px;
}
.items {
  line-height: 16px;
}
.my-header {
  font-size: 32px;
  line-height: 36px;
  font-weight: 500;
  color: #212121;
}
</style>