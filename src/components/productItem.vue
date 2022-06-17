<template>
  <q-card
    class="my-card no-wrap q-ma-sm justify-between"
    :style="{
      minWidth: basket ? '98% ' : '',
      minHeight: product.type != 0 ? '335px' : '160px',
      maxHeight: product.type != 0 ? '335px' : '160px',
    }"
  >
    <div
      :title="product.type == 0 ? 'Смотреть категорию' : ''"
      :style="{
        height: product.type != 0 ? '160px' : '',
        transition: product.type == 0 ? '0.2s' : '',
      }"
      class="bg-teal rounded-borders flex flex-center text-white"
      :class="{
        fit: product.type == 0,
        'cursor-pointer': product.type == 0,
        category: product.type == 0,
      }"
      @click="openCategory"
    >
      <q-avatar
        size="100px"
        font-size="52px"
        color="transparent"
        text-color="white"
        icon="image_not_supported"
        v-if="product.type != 0"
      />
      <div class="column flex-center" v-if="product.type == 0">
        <q-avatar
          size="70px"
          font-size="52px"
          color="transparent"
          text-color="white"
          icon="image"
        />
        <div class="text-caption">Категория</div>
        <div class="text-h6 end-dots">
          {{ product.design.title }}
        </div>
      </div>
    </div>
    <div class="flex no-wrap justify-between" v-if="product.type != 0">
      <div class="my-card-info">
        <q-card-section>
          <div class="end-dots title">{{ product.design.title }}</div>
          <div
            class="text-caption text-weight-bold text-grey-7 end-dots caption"
          >
            {{ product.design.rules }}
          </div>
          <q-btn
            v-if="product.type == 7"
            color="teal-9"
            dense
            flat
            class="text-h6 text-weight-bold"
            padding="0px 4px"
            :label="product.price.amount + ' ' + convertСurrency"
          />
        </q-card-section>
      </div>
      <div class="column q-pa-sm" v-if="basket">
        <q-btn
          dense
          flat
          color="teal"
          icon="delete"
          no-caps
          no-wrap
          label="Удалить"
          @click="
            actionsWithBasket({ action: 'remove', category_id: product.id })
          "
        />
      </div>
    </div>
    <q-card-actions
      align="center"
      class="flex absolute-bottom"
      v-if="product.type == 7"
    >
      <block-product-button :prod="product" />
    </q-card-actions>
  </q-card>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations } from "vuex";

import BlockProductButton from "src/components/productsTypes/BlockProductButton.vue";

export default {
  components: {
    BlockProductButton,
  },
  props: {
    product: {
      type: Object,
      required: false,
    },
    basket: {
      type: Boolean,
      required: false,
    },
  },
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
    ...mapActions(["getChosenCategory", "actionsWithBasket"]),
    openCategory() {
      if (this.product.type == 0) {
        this.getChosenCategory(this.product);
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
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}
.caption {
  line-height: 14px;
  margin-bottom: 6px;
}
</style>