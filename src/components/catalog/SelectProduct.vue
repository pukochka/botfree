<template>
  <div class="max-lg center">
    <q-btn
      color="secondary"
      icon="chevron_left"
      flat
      @click="changeSelectTab('all')"
    />
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
    <q-item-section>
      <q-item-label class="text-h5 text-secondary q-pt-md" lines="3">{{
        product.design.title
      }}</q-item-label>
      <q-item-label class="text-subtitle2 text-secondary" lines="4">{{
        product.design.rules
      }}</q-item-label>
    </q-item-section>

    <div class="q-pt-md">
      <q-btn
        v-if="product.price.old_price != 0"
        class="text-weight-bold text-strike"
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
    <div class="" v-if="viewUser.bot_data?.type?.id !== 7">
      <div class="text-h6 text-secondary q-py-sm">Выбор количества товара:</div>
      <div
        class="text-subtitle1 text-red"
        v-if="product.setting.min_count === product.setting.max_count"
      >
        Количество товара нельзя выбрать
      </div>
      <div
        v-else
        class="
          border
          rounded-borders
          text-secondary
          flex
          no-wrap
          justify-between
          relative-position
        "
      >
        <q-btn
          flat
          color="secondary"
          icon="remove"
          class="absolute-left"
          @click="count--"
          v-if="product.setting.min_count < count"
        />

        <div class="text-secondary absolute-center text-h6">
          {{ count }}
        </div>

        <q-btn
          flat
          color="secondary"
          icon="add"
          class="absolute-right"
          @click="count++"
          v-if="product.setting.max_count > count"
        />
      </div>
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
    return {
      count: ref(0),
    };
  },
  computed: {
    ...mapGetters({
      viewSelect: "select/viewSelect",
      viewUser: "user/viewUser",
    }),
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
    ...mapMutations({
      changeSelectTab: "select/changeSelectTab",
      changeDigitalCount: "digital/changeDigitalCount",
    }),
  },
  watch: {
    count(value) {
      this.changeDigitalCount(value);
    },
  },
  mounted() {
    this.count = this.product.setting.min_count;
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
.border {
  border: 2px solid;
  min-height: 40px;
  margin: 0 8px;
  max-width: 160px;
}
</style>