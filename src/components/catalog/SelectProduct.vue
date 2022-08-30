<template>
  <q-btn
    color="secondary"
    icon="chevron_left"
    flat
    @click="changeSelectTab('all')"
  />
  <div class="max-lg center">
    <div
      class="bg-primary rounded-borders"
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
    <div class="text-h5 text-secondary q-pt-md">{{ product.design.title }}</div>
    <div class="text-subtitle2 text-secondary">{{ product.design.rules }}</div>
    <div class="q-pt-md">
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
    <div class="relative-position min-h-ss">
      <ProductButtonGroup :prod="product" />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

import ProductButtonGroup from "src/components/product/ProductButtonGroup.vue";

export default defineComponent({
  components: {
    ProductButtonGroup,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewSelect: "select/viewSelect" }),
    product() {
      return this.viewSelect;
    },
    convertСurrency() {
      switch (this.viewSelect.price.currency) {
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
          return this.viewSelect.price.currency;
      }
    },
  },
  methods: {
    ...mapMutations({ changeSelectTab: "select/changeSelectTab" }),
  },
});
</script>
<style lang="scss" scoped>
.img {
  min-height: 200px;
  max-height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>