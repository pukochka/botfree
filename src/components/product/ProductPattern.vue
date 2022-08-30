<template>
  <q-card class="fit" :dark="viewUser.theme.is_dark">
    <Transition name="fade">
      <div
        class="absolute fit flex flex-center bg-opacity z-max rounded-borders"
        v-if="
          (viewBasket.loading['subtract'] ||
            viewBasket.loading['remove'] ||
            viewBasket.loading['add'] ||
            viewBasket.loading['set-count']) &&
          viewBasket.elem == product.id
        "
      >
        <q-spinner color="secondary" size="5rem" class="z-max" />
      </div>
    </Transition>
    <div
      @click="changeSelectProduct(product)"
      class="bg-primary"
      :class="{ 'flex flex-center': !product.design.image }"
    >
      <q-avatar
        size="56px"
        font-size="40px"
        color="transparent"
        text-color="secondary"
        icon="image"
        v-if="!product.design.image"
      />
      <div
        class="img"
        :style="{ 'background-image': `url(${product.design.image})` }"
      ></div>
    </div>

    <div class="q-pa-md">
      <q-item-section @click="changeSelectProduct(product)">
        <q-item-label lines="1" class="text-secondary title">{{
          product.design.title
        }}</q-item-label>
        <q-item-label caption lines="2" class="text-secondary">{{
          product.design.rules
        }}</q-item-label>
      </q-item-section>
      <div @click="changeSelectProduct(product)">
        <q-btn
          v-if="product.price.old_price != 0"
          class="text-weight-bold underline"
          flat
          unelevated
          size="20px"
          padding="0"
          no-wrap
          color="red-5"
          :label="product.price.old_price + ' ' + convertСurrency"
        />
        <q-btn
          class="text-weight-bold"
          flat
          unelevated
          size="20px"
          padding="0"
          color="secondary"
          no-wrap
          :class="{ 'q-ml-sm': product.price.old_price != 0 }"
          :label="product.price.full"
        />
      </div>

      <div class="q-py-md">
        <ProductButtonGroup :prod="product" />
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
      viewUser: "user/viewUser",
    }),
    themeColor() {
      return this.viewUser.theme.is_dark ? "bg-dark" : "bg-white";
    },
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
    ...mapMutations({ changeSelectProduct: "select/changeSelectProduct" }),
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
}
.caption {
  line-height: 14px;
  margin-bottom: 6px;
}
.img {
  min-height: 150px;
  max-height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.underline {
  text-decoration: line-through;
}
</style>