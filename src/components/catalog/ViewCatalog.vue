<template>
  <div class="q-pa-sm max-xxl center">
    <div class="my-header">Каталог товаров бота</div>
    <q-separator class="q-my-xs" />
  </div>
  <div class="flex center max-xxl q-gutter-sm">
    <q-btn
      rounded
      outline
      color="primary"
      label="Все категории"
      @click="getAllProducts()"
    />
  </div>

  <!-- <div class="flex center max-xxl">
    <q-input
      class="q-mt-sm q-mb-none q-mx-sm max-lg"
      style="width: 100%"
      outlined
      dense
      label="Поиск товаров"
      color="primary"
      v-model="search"
      type="text"
    />
  </div> -->
  <div class="center max-xxl min-size-xl q-px-sm">
    <div class="">
      <div class="my-header q-py-md">Категории</div>
      <div class="row q-col-gutter-sm">
        <div
          class="col-md-3 col-lg-3 col-6"
          v-for="(product, index) of viewItemsCategory"
          :key="index"
          @click="getAllProducts(product.id)"
        >
          <productCategory :product="product" />
        </div>
        <div
          class="col-md-3 col-lg-3 col-6"
          v-if="viewItemsCategory.length == 0"
        >
          <div
            class="
              active
              bg-primary
              q-pa-md
              text-center
              rounded-borders
              flex flex-center
              relative-position
            "
          >
            <div class="active-drop fit absolute-center"></div>
            <q-avatar
              size="30px"
              font-size="26px"
              color="transparent"
              text-color="white"
              icon="chevron_left"
            />
            <div class="text-white text-subtitle1">Обратно</div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="my-header q-py-md">Товары</div>
      <div class="row q-col-gutter-sm">
        <div
          class="col-md-3 col-lg-3 col-6"
          v-for="(product, index) of viewItemsProduct"
          :key="index"
        >
          <product-item class="" :product="product" />
        </div>
        <div
          class="col-12 flex flex-center"
          v-if="viewItemsProduct.length == 0"
        >
          <div
            class="
              active
              bg-primary
              q-pa-md
              text-center
              rounded-borders
              flex flex-center
              relative-position
            "
          >
            <div class="active-drop fit absolute-center"></div>

            <div class="text-white text-subtitle1">Товаров пока нет</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import productItem from "components/product/productItem.vue";
import productCategory from "src/components/product/productCategory.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    productItem,
    productCategory,
  },
  setup() {
    return {
      search: ref(""),
    };
  },
  computed: {
    ...mapGetters(["viewAllProducts", "viewTab"]),
    viewItemsCategory() {
      return this.viewAllProducts.filter((item) => item.type == 0);
    },
    viewItemsProduct() {
      return this.viewAllProducts.filter((item) => item.type != 0);
    },
  },

  methods: {
    ...mapMutations(["changeTabs"]),
    ...mapActions(["getAllProducts"]),
  },
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 400px;
}
.active {
  border-radius: 4px !important;
}
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
@media (max-width: 450px) {
  .header {
    font-size: 28px;
    line-height: 1.2;
  }

  .min-size-xl {
    min-height: 400px;
  }
}
@media (max-width: 350px) {
  .footer {
    justify-content: center;
  }
}
</style>