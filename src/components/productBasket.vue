<template>
  <q-dialog
    v-model="open"
    persistent
    maximized
    transition-show="jump-up"
    transition-hide="jump-down"
  >
    <q-card class="bg-layout text-grey-9">
      <q-card-actions vertical align="right" class=""> </q-card-actions>
      <div
        class="q-pa-md text-h4 text-white max-xl center flex justify-between"
      >
        Корзина
        <q-btn dense flat color="white" icon="close" @click="openBasket" />
      </div>
      <q-card-section class="max-xl center">
        <product-item
          basket
          class=""
          v-for="(item, index) of viewBasket"
          :key="index"
          :product="item.data"
        />
      </q-card-section>
      <q-card-section class="max-xl center flex flex-center">
        <q-card class="full-width" v-if="viewBasket.length != 0">
          <q-card-section>
            <div class="text-h5">Общая цена : {{ totalPrice }}</div>
          </q-card-section>
          <q-btn
            v-if="viewBasket.length != 0"
            class="text-teal q-ma-md"
            rounded
            outline
            label="Оформить заказ"
          />
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
      let str = "";
      let currency = [];
      this.viewBasket.forEach((element) => {
        currency.push({
          vlt: element.data.price.currency,
          nmb: element.data.price.amount,
        });
      });
      this.viewBasket.forEach((element, index) => {
        let total = 0;
        currency
          .filter((item) => item.vlt == element.data.price.currency)
          .forEach((el) => (total += +el.nmb));
        str +=
          `${index == 0 ? "" : " + "}` +
          total +
          " " +
          element.data.price.currency;
      });

      return str;
    },
  },
  methods: {
    ...mapMutations(["openBasket"]),
    ...mapActions(["getUserData", "viewAllProducts"]),
  },
  setup() {
    return {};
  },
};
</script>