<template>
  <q-card class="fit">
    <div
      class="absolute fit flex flex-center bg-opacity z-max"
      v-if="
        (viewBasket.loading['subtract'] ||
          viewBasket.loading['remove'] ||
          viewBasket.loading['add'] ||
          viewBasket.loading['set-count']) &&
        viewBasket.elem == product.id
      "
    >
      <q-spinner color="primary" size="5rem" class="z-max" />
    </div>
    <div class="bg-primary flex flex-center img">
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
        no-wrap
        :class="{ underline: product.price.old_price != 0 }"
        :color="product.price.old_price != 0 ? 'red-5' : 'primary'"
        :label="product.price.old_price + ' ' + convertСurrency"
        v-if="product.price.old_price != 0"
      />
      <q-btn
        class="text-weight-bold q-my-sm q-ml-xs"
        flat
        size="20px"
        padding="0"
        color="primary"
        no-wrap
        :label="product.price.full"
      />
      <div class="q-py-md">
        <ProductButtonGroup class="" :prod="product" />
      </div>
    </div>
  </q-card>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import ProductButtonGroup from "src/components/product/ProductButtonGroup.vue";

export default {
  components: {
    ProductButtonGroup,
  },
  props: ["product"],
  computed: {
    ...mapGetters({
      viewBasket: "basket/viewBasket",
    }),
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
.underline {
  text-decoration: line-through;
}
</style>