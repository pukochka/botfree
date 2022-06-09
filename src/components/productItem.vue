<template>
  <q-card class="my-card no-wrap q-ma-sm justify-between">
    <div style="height: 160px" class="bg-teal rounded-borders">
      <q-avatar
        size="100px"
        font-size="52px"
        color="transparent"
        text-color="white"
        icon="image_not_supported"
      />
    </div>
    <div class="flex no-wrap justify-between">
      <div class="my-card-info">
        <q-card-section>
          <div class="text-h6 end-dots">{{ product.design.title }}</div>
          <div class="q-ma-xs q-gutter-sm">
            <BlockCategoryItems
              :items="product.items"
              v-if="product.type == 0"
            />
          </div>
          <BlockProductPrice :prod="product" v-if="product.type == 7" />
        </q-card-section>
      </div>

      <q-card-actions align="right" vertical>
        <block-category-button v-if="product.type == 0" :prod="product" />
        <block-product-button v-if="product.type == 7" />
      </q-card-actions>
    </div>
  </q-card>
</template>
<script>
import { ref } from "vue";

import BlockCategoryItems from "src/components/productsTypes/BlockCategoryItems.vue";
import BlockCategoryButton from "src/components/productsTypes/BlockCategoryButton.vue";
import BlockProductButton from "src/components/productsTypes/BlockProductButton.vue";
import BlockProductPrice from "src/components/productsTypes/BlockProductPrice.vue";

export default {
  components: {
    BlockCategoryItems,
    BlockCategoryButton,
    BlockProductButton,
    BlockProductPrice,
  },
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.my-card {
  min-height: 300px;
  max-height: 350px;
  min-width: 290px;
  flex-grow: 1;
  &-info {
    max-width: 240px;
  }
}
</style>