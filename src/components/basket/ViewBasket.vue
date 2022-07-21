<template>
  <div class="q-pt-md max-xxl center">
    <div class="fixed-center z-max">
      <div
        class="bg-white q-pa-md rounded-borders"
        v-if="viewBasket.loading['remove-all']"
      >
        <q-spinner color="secondary" size="6rem" />
      </div>
    </div>
    <div class="my-header flex items-end text-secondary">
      Корзина
      <div
        class="q-ml-sm text-caption text-grey-7"
        v-if="viewBasket.data.countItems != 0"
      >
        Товаров {{ viewBasket.data.countItems }}
      </div>
    </div>
    <q-separator class="q-my-xs" />
  </div>
  <div class="max-xxl center row justify-end q-py-sm">
    <q-btn
      v-if="viewBasket.data.countItems != 0"
      flat
      dense
      color="secondary"
      icon="delete"
      label="Очистить корзину"
      @click="sure = !sure"
    />
  </div>
  <div class="max-xxl center column">
    <div class="text-h5 column" v-if="viewBasket.data.countItems == 0">
      В корзине пока пусто
      <q-btn
        color="secondary"
        class="text-primary q-my-md"
        label="К товарам"
        @click="changeTabs('catalog')"
      />
    </div>
    <BasketProduct
      v-for="(item, index) of viewBasket.data.items"
      :key="index"
      :product="item.product"
    />
  </div>
  <div class="max-xxl center flex">
    <q-card
      class="full-width relative-position bg-grey-2"
      v-if="viewBasket.data.countItems != 0"
    >
      <Transition name="fade">
        <div
          class="absolute fit flex flex-center bg-opacity z-max"
          v-if="
            viewBasket.loading['subtract'] ||
            viewBasket.loading['remove'] ||
            viewBasket.loading['add'] ||
            viewBasket.loading['set-count']
          "
        >
          <q-spinner color="secondary" size="5rem" class="z-max" />
        </div>
      </Transition>
      <q-card-section class="">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="q-mb-sm">
              <q-btn
                class="fit"
                color="secondary"
                unelevated
                label="Перейти к оформлению"
                @click="toFormOrder"
              />
            </div>
            <div
              class="
                flex
                justify-between
                text-h5 text-weight-bold text-secondary
              "
            >
              <div class="">Итого</div>
              <div class="">
                {{ viewBasket.data.sum }}
              </div>
            </div>
            <div class="flex justify-between text-caption text-grey-7">
              <div class="">
                Всего товаров : {{ viewBasket.data.count }} шт.
              </div>
              <div class="">
                {{ viewBasket.data.sum_full }}
              </div>
            </div>
            <div class="flex justify-between text-caption text-grey-7">
              <div class="">Выгода</div>
              <div class="text-red-6">{{ benefit }}</div>
            </div>
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <UseCoupon />
          </div>
          <div
            class="col-12 col-sm-6"
            v-if="viewBasket.data.discounts.length != 0"
          >
            <UseSales />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <BasketDialogClear v-model="sure" />
  <OrderCreate />
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

import BasketDialogClear from "src/components/basket/BasketDialogClear.vue";
import UseSales from "src/components/form/ReducePrice/UseSales.vue";
import UseCoupon from "src/components/form/ReducePrice/UseCoupon.vue";
import BasketProduct from "src/components/basket/BasketProduct.vue";
import OrderCreate from "src/components/infoDialogs/OrderCreate.vue";

export default {
  props: {},
  components: {
    BasketProduct,
    BasketDialogClear,
    OrderCreate,
    UseSales,
    UseCoupon,
  },
  setup() {
    return {
      sure: ref(false),
    };
  },
  computed: {
    ...mapGetters({ viewBasket: ["basket/viewBasket"] }),
    benefit() {
      const toNunber = (str) => {
        return Number([...str].slice(0, str.length - 2).join(""));
      };
      const currency = (str) => {
        return [...str].slice(str.length - 1, str.length).join("");
      };

      let sum_full = toNunber(this.viewBasket.data.sum_full),
        sum = toNunber(this.viewBasket.data.sum),
        benefit = (sum - sum_full).toFixed(2),
        current = currency(this.viewBasket.data.sum);
      return " " + benefit + " " + current;
    },
  },
  methods: {
    ...mapActions({ getBasket: "getBasket", getOrders: "order/getOrders" }),
    ...mapMutations({ changeTabs: "user/changeUserTab" }),
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
.outline {
  outline: solid 2px $secondary;
}
</style>