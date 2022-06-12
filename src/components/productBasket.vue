<template>
  <q-dialog
    v-model="open"
    persistent
    maximized
    transition-show="jump-up"
    transition-hide="jump-down"
  >
    <q-card class="bg-layout text-grey-9 relative-position">
      <q-card-actions vertical align="right" class=""> </q-card-actions>
      <div
        class="q-pa-md text-h4 text-white max-xl center flex justify-between"
      >
        Корзина
        <q-btn dense flat color="white" icon="close" @click="openBasket" />
      </div>
      <q-card-section class="max-xl center flex">
        <product-item
          basket
          class=""
          v-for="(item, index) of viewBasket"
          :key="index"
          :product="item.data"
        />
      </q-card-section>
      <q-card-section class="max-xl center flex flex-center">
        <q-card
          class="full-width q-mb-xxl relative-position"
          v-if="viewBasket.length != 0"
        >
          <q-card-section class="flex flex-grow justify-between">
            <div class="flex">
              <div class="q-mr-md">Товары</div>
              <div class="">
                <div class="" v-for="(item, index) of viewBasket" :key="index">
                  {{ item.count }} * {{ item.data.price.amount }}
                  {{ convertСurrency(item.data.price.currency) }}
                </div>
              </div>
            </div>
            <div class=""></div>
          </q-card-section>

          <q-card-section
            class="flex flex-grow justify-between text-h5 text-weight-bold"
          >
            <div class="">Итого</div>
            <div class="">
              <div
                class="flex flex-center column"
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
          </q-card-section>

          <div class="flex-grow q-ma-sm">
            <q-btn class="fit" color="teal" label="Перейти к оформлению" />
          </div>
        </q-card>

        <div class="text-h5 column" v-if="viewBasket.length == 0">
          В корзине пока пусто
          <q-btn
            class="text-white q-ma-md"
            rounded
            outline
            label="К товарам"
            @click="openBasket"
          />
        </div>
      </q-card-section>
    </q-card>
    <div class="full-screen">
      <q-card
        class="
          max-xl
          fixed-bottom
          center
          flex
          justify-between
          items-center
          basket
          bg-white
        "
        style="height: 60px"
      >
        <div class="flex q-pl-md">
          <div class="flex" v-for="(item, index) of totalPrice" :key="index">
            <div class="q-px-xs text-h6">{{ item }}</div>
            <div v-if="totalPrice.length > 1 && index != totalPrice.length - 1">
              +
            </div>
          </div>
        </div>
        <q-btn class="q-ma-sm" size="13px" color="teal" label="К оформлению" />
      </q-card>
    </div>
  </q-dialog>
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

import productItem from "components/productItem.vue";

export default {
  props: {},
  components: {
    productItem,
  },
  computed: {
    ...mapGetters(["open", "allProducts", "viewBasket"]),

    totalPrice() {
      let items = [];
      let equal = [];
      let total = "";
      let final = [];

      this.viewBasket.forEach((element) => {
        items.push(element.data.price.currency);
      });
      items = new Set(items);
      items.forEach((currency) => {
        equal.push(
          this.viewBasket.filter((item) => item.data.price.currency == currency)
        );
      });
      equal.forEach((item) => {
        total = 0;
        item.forEach((currency) => {
          total += +currency.count * +currency.data.price.amount;
        });
        total += " " + this.convertСurrency(item[0].data.price.currency);
        final.push(total);
      });

      return final;
    },
  },
  methods: {
    ...mapMutations(["openBasket"]),
    ...mapActions(["getUserData", "viewAllProducts"]),
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
  setup() {
    return {};
  },
  watch: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.basket {
  position: fixed;
  bottom: 10px;
}
</style>