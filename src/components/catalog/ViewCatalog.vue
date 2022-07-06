<template>
  <div class="q-pa-sm max-xxl center">
    <div class="my-header flex items-end">Каталог товаров бота</div>

    <q-separator class="q-my-sm" />
    <div class="max-sm q-pa-md">
      {{ data }}
    </div>
  </div>
  <div class="flex center max-xxl q-gutter-sm">
    <q-btn
      rounded
      outline
      color="primary"
      icon="chevron_left"
      title="Обратно"
      @click="getAllProducts()"
    />
    <q-btn-group spread rounded>
      <q-btn
        padding="0 20px"
        :outline="viewSelectCategory == 0"
        color="primary"
        label="категории"
        @click="changeCategoryView(0)"
      />
      <q-btn
        padding="0 20px"
        :outline="viewSelectCategory == 7"
        color="primary"
        label="товары"
        @click="changeCategoryView(7)"
      />
      <q-btn
        padding="0 20px"
        :outline="viewSelectCategory == 7"
        color="primary"
        label="ААА"
        @click="changeTabs('formsOrders')"
      />
    </q-btn-group>
  </div>

  <div class="flex center max-xxl">
    <q-input
      class="q-my-lg q-mx-sm max-lg"
      style="width: 100%"
      outlined
      dense
      :label="viewSelectCategory != 0 ? 'Поиск товаров' : 'Поиск по категории'"
      color="primary"
      v-model="search"
      type="text"
    />
  </div>
  <div class="center max-xxl min-size-xl q-px-sm">
    <div class="row q-col-gutter-sm">
      <div
        class="col-md-3 col-lg-3 col-6"
        v-for="(product, index) of viewItems()"
        :key="index"
        v-show="product.type != 0"
      >
        <product-item class="" v-if="product.type != 0" :product="product" />
      </div>
      <div
        class="col-md-3 col-lg-3 col-6"
        v-for="(product, index) of viewItems()"
        :key="index"
        v-show="product.type == 0"
        @click="getAllProducts(product.id)"
      >
        <productCategory v-if="product.type == 0" :product="product" />
      </div>
      <div
        class="col-md-3 col-lg-3 col-6"
        v-for="(slelton, index) in 8"
        :key="index"
        v-show="viewAllProducts.length == 0"
      >
        <q-skeleton height="160px" rect />
      </div>
      <div
        class="
          full-width
          text-h4
          rounded-borders
          text-grey
          flex flex-center
          column
        "
        v-if="
          viewItems().length == 0 &&
          viewSelectCategory == 7 &&
          viewAllProducts.length != 0
        "
      >
        Товаров нет
        <q-btn
          class="q-ma-md"
          padding="4px 16px"
          rounded
          dense
          outline
          color="primary"
          label="Посмотреть Категории"
          @click="changeCategoryView(0)"
        />
      </div>
      <div
        class="
          text-h4
          rounded-borders
          text-grey
          flex flex-center
          full-width
          column
        "
        v-if="
          viewItems().length == 0 &&
          viewSelectCategory == 0 &&
          viewAllProducts.length != 0
        "
      >
        Категорий нет
        <q-btn
          class="q-ma-md"
          padding="4px 16px"
          rounded
          dense
          outline
          color="primary"
          label="Посмотреть товары"
          @click="changeCategoryView(7)"
        />
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
    ...mapGetters(["viewAllProducts", "viewSelectCategory", "viewTab"]),
    data() {
      console.log(window.Telegram.WebApp.initData);
      return window.Telegram.WebApp.initData;
    },
  },
  methods: {
    ...mapMutations(["changeCategoryView", "changeTabs"]),
    ...mapActions(["getAllProducts"]),
    convertURL(search) {
      if (search == "") {
        return false;
      } else {
        let result = {};
        for (const [key, value] of new URLSearchParams(search)) {
          result[key] = value;
        }
        return result;
      }
    },
    viewItems() {
      if (this.viewSelectCategory == 0) {
        return this.viewAllProducts.filter(
          (item) =>
            (item.design.title?.toLowerCase().trim().includes(this.search) ||
              item.design.title?.toLowerCase().includes(this.search) ||
              item.design.title?.includes(this.search) ||
              item.design.rules?.includes(this.search) ||
              item.design.rules?.toLowerCase().trim().includes(this.search) ||
              item.design.rules?.toLowerCase().includes(this.search)) &&
            item.type == 0
        );
      } else if (this.viewSelectCategory == 7) {
        return this.viewAllProducts.filter(
          (item) =>
            (item.design.title?.toLowerCase().trim().includes(this.search) ||
              item.design.title?.toLowerCase().includes(this.search) ||
              item.design.title?.includes(this.search) ||
              item.design.rules?.includes(this.search) ||
              item.design.rules?.toLowerCase().trim().includes(this.search) ||
              item.design.rules?.toLowerCase().includes(this.search)) &&
            item.type == 7
        );
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 400px;
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