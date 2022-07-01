<template>
  <div class="q-pa-md max-xxl center">
    <div class="my-header flex items-end">
      Корзина
      <div
        class="q-ml-sm text-caption text-grey-7"
        v-if="viewBasket.length != 0"
      >
        Товаров {{ viewBasket.length }}
      </div>
    </div>
    <q-separator class="q-my-sm" />
  </div>
  <q-card-actions align="right" class="max-xxl center">
    <q-btn
      v-if="viewBasket.length != 0"
      flat
      dense
      color="primary"
      icon="delete"
      label="Очистить корзину"
      @click="sure = !sure"
    />
  </q-card-actions>
  <q-card-section class="max-xxl center column">
    <div class="text-h5 column" v-if="viewBasket.length == 0">
      В корзине пока пусто
      <q-btn
        class="text-primary q-ma-md"
        rounded
        outline
        label="К товарам"
        @click="changeTabs('catalog')"
      />
    </div>
    <productItemBasket
      v-for="(item, index) of viewBasket"
      :key="index"
      :product="item.product"
    />
  </q-card-section>
  <q-card-section class="max-xxl center flex">
    <div class="max-md full-width">
      <q-card
        class="full-width q-mb-xxl relative-position bg-grey-2"
        v-if="viewBasket.length != 0"
      >
        <q-card-section class="">
          <div class="flex flex-grow justify-between text-h5 text-weight-bold">
            <div class="">Итого</div>
            <div class="">
              <div
                class="flex flex-center"
                v-for="(item, index) of totalPrice"
                :key="index"
              >
                {{ item }}
                <div
                  class="flex flex-center"
                  v-if="totalPrice.length > 1 && index != totalPrice.length - 1"
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-grow justify-between text-caption text-grey-7">
            <div class="">Всего товаров {{ viewBasket.length }}</div>
            <div class="">
              <div
                class="flex flex-center"
                v-for="(item, index) of totalPrice"
                :key="index"
              >
                {{ item }}
                <div
                  class="flex flex-center"
                  v-if="totalPrice.length > 1 && index != totalPrice.length - 1"
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div class="q-py-md">
            <q-input
              v-model="promo"
              dense
              borderless
              outlined
              color="primary"
              type="text"
              label="Промокод"
              mask="**-**-**-**-**"
            />
          </div>
          <div class="flex-grow q-mt-sm">
            <q-btn
              class="fit"
              color="primary"
              label="Перейти к оформлению"
              @click="changeTabs('formsOrders')"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card-section>
  <BasketDialogClear v-model="sure" />
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

import BasketDialogClear from "src/components/basket/BasketDialogClear.vue";
import productItemBasket from "components/basket/productItemBasket.vue";

export default {
  props: {},
  components: {
    productItemBasket,
    BasketDialogClear,
  },
  setup() {
    return {
      promo: ref(""),
      sure: ref(false),
    };
  },
  computed: {
    ...mapGetters(["viewBasket", "viewInitData"]),
    totalPrice() {
      let items = [];
      let equal = [];
      let total = "";
      let final = [];

      this.viewBasket.forEach((element) => {
        items.push(element.product.price.currency);
      });
      items = new Set(items);
      items.forEach((currency) => {
        equal.push(
          this.viewBasket.filter(
            (item) => item.product.price.currency == currency
          )
        );
      });
      equal.forEach((item) => {
        total = 0;
        item.forEach((currency) => {
          total += +currency.count * +currency.product.price.amount;
        });
        total += " " + this.convertСurrency(item[0].product.price.currency);
        final.push(total);
      });
      return final;
    },
  },
  methods: {
    ...mapActions(["actionsWithBasket"]),
    ...mapMutations(["changeTabs"]),
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