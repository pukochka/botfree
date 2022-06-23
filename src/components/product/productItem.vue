<template>
  <q-card class="q-ma-sm">
    <div class="bg-teal flex flex-center img">
      <q-avatar
        size="56px"
        font-size="40px"
        color="transparent"
        text-color="white"
        icon="image"
      />
    </div>
    <div class="q-pa-md">
      <div class="end-dots title">{{ product.design.title }}</div>
      <div class="text-caption text-weight-bold text-grey-7 end-dots caption">
        {{ product.design.rules }}
      </div>
      <q-btn
        class="text-weight-bold q-my-sm"
        flat
        size="20px"
        padding="0"
        color="teal"
        no-wrap
        :label="product.price.amount + ' ' + convertСurrency"
      />
      <div class="q-py-md">
        <ProductButtonGroup class="" :prod="product" />
      </div>
    </div>
  </q-card>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations } from "vuex";

import ProductButtonGroup from "src/components/product/ProductButtonGroup.vue";

export default {
  components: {
    ProductButtonGroup,
  },
  props: ["product"],
  computed: {
    convertСurrency() {
      switch (this.product.price.currency) {
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
          return this.product.price.currency;
      }
    },
  },

  methods: {
    ...mapActions(["actionsWithBasket"]),
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.category:hover {
  background: #1eb091 !important;
}
.title {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}
.caption {
  line-height: 14px;
  margin-bottom: 6px;
}
.img {
  min-height: 150px;
  max-height: 150px;
}
</style>