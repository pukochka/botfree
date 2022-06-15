<template>
  <q-page class="bg-white">
    <div class="q-pa-lg flex center max-xxl text-h4">Каталог товаров бота</div>
    <div class="max-xs center">{{ getInitData.data }}</div>
    <div class="flex center max-xxl q-gutter-md">
      <q-btn
        rounded
        outline
        color="teal"
        icon="chevron_left"
        title="Обратно"
        @click="viewAllProducts()"
      />
      <q-btn
        rounded
        :outline="selectView == 7"
        color="teal"
        label="категории"
        @click="selectView = 0"
      />
      <q-btn
        rounded
        :outline="selectView == 0"
        color="teal"
        label="товары"
        @click="selectView = 7"
      />
    </div>

    <div class="flex center max-xxl">
      <q-input
        class="q-ma-lg max-lg"
        style="width: 100%"
        rounded
        outlined
        dense
        :label="changeLabel()"
        color="teal"
        v-model="search"
        type="text"
      />
    </div>
    <div class="center max-xxl min-size-xl">
      <div class="flex wrap">
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
            selectView == 7 &&
            allProducts.length != 0
          "
        >
          Товаров нет
          <q-btn
            class="q-ma-md"
            padding="4px 16px"
            rounded
            dense
            outline
            color="teal"
            label="Посмотреть Категории"
            @click="selectView = 0"
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
            selectView == 0 &&
            allProducts.length != 0
          "
        >
          Категорий нет
          <q-btn
            class="q-ma-md"
            padding="4px 16px"
            rounded
            dense
            outline
            color="teal"
            label="Посмотреть товары"
            @click="selectView = 7"
          />
        </div>
        <product-item
          class=""
          v-for="(prod, index) of viewItems()"
          :key="index"
          :product="prod"
        />
        <q-card
          class="my-card q-ma-sm"
          v-for="(slelton, index) in 8"
          :key="index"
          v-show="allProducts.length == 0"
        >
          <q-skeleton height="160px" square />
        </q-card>
      </div>
    </div>

    <q-separator />
    <div class="footer q-pa-lg row justify-between items-center">
      <q-btn
        flat
        dense
        color="teal"
        padding="4px 8px"
        label="Другая информация"
      />
      <div class="social q-gutter-md">
        <q-avatar size="30px" color="teal" text-color="white" />
        <q-avatar size="30px" color="blue-4" text-color="white" />
        <q-avatar size="30px" color="purple-4" text-color="white" />
      </div>
    </div>
    <productBasket />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import productItem from "components/productItem.vue";
import productBasket from "components/productBasket.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    productItem,
    productBasket,
  },
  setup() {
    return {
      dialog: ref(false),
      search: ref(""),
      selectView: ref(0),
    };
  },
  computed: {
    ...mapGetters(["open", "allProducts", "viewBasket", "getInitData"]),
  },
  methods: {
    ...mapMutations(["openBasket"]),
    ...mapActions(["getUserData", "viewAllProducts"]),
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
    changeLabel() {
      if (this.selectView == 0) {
        return "Поиск по категории";
      } else if (this.selectView == 7) {
        return "Поиск товаров";
      }
    },
    viewItems() {
      if (this.selectView == 0) {
        return this.allProducts.filter(
          (item) =>
            (item.design.title?.toLowerCase().trim().includes(this.search) ||
              item.design.title?.toLowerCase().includes(this.search) ||
              item.design.title?.includes(this.search) ||
              item.design.rules?.includes(this.search) ||
              item.design.rules?.toLowerCase().trim().includes(this.search) ||
              item.design.rules?.toLowerCase().includes(this.search)) &&
            item.type == 0
        );
      } else if (this.selectView == 7) {
        return this.allProducts.filter(
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
  mounted() {
    this.getUserData();
    this.viewAllProducts();
  },
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 600px;
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