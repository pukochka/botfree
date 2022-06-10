<template>
  <q-page class="">
    <div class="q-pa-lg flex center max-xxl text-h4">Каталог товаров бота</div>
    <div class="flex center max-xxl q-gutter-md">
      <q-btn
        rounded
        outline
        color="teal"
        icon="chevron_left"
        title="Обратно"
        @click="selectView = 0"
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

    <div class="flex wrap center max-xxl min-size-xl">
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
          viewItems().length == 0 && selectView == 7 && allProducts.length != 0
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
          viewItems().length == 0 && selectView == 0 && allProducts.length != 0
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
        class="col"
        v-for="(prod, index) of viewItems()"
        :key="index"
        :product="prod"
      />
      <q-card
        class="col my-card q-ma-sm"
        v-for="(slelton, index) in 6"
        :key="index"
        v-show="allProducts.length == 0"
      >
        <q-skeleton height="200px" square />
        <div class="flex no-wrap justify-between">
          <div class="q-ma-xs q-gutter-md">
            <q-skeleton width="200px" height="16px" square />
            <q-skeleton width="200px" height="16px" square />
          </div>

          <q-card-actions vertical align="right" class="q-gutter-md">
            <q-skeleton size="32px" type="QBtn" />
            <q-skeleton size="32px" type="QBtn" />
          </q-card-actions>
        </div>
      </q-card>
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
    <q-dialog
      v-model="open"
      persistent
      maximized
      transition-show="jump-up"
      transition-hide="jump-down"
    >
      <q-card class="bg-layout text-grey-9">
        <q-card-actions vertical align="right" class=""> </q-card-actions>
        <div
          class="q-pa-md text-h4 text-white max-xl center flex justify-between"
        >
          Корзина
          <q-btn dense flat color="white" icon="close" @click="openBasket" />
        </div>
        <q-card-section class="max-xl center">
          <product-item
            basket
            class=""
            v-for="(item, index) of viewBasket"
            :key="index"
            :product="item"
          />
        </q-card-section>
        <q-card-section class="max-xl center flex flex-center">
          <q-card class="full-width" v-if="viewBasket.length != 0">
            <q-card-section>
              <div class="text-h5">Общая цена : {{ totalPrice }}</div>
            </q-card-section>
            <q-btn
              v-if="viewBasket.length != 0"
              class="text-teal q-ma-md"
              rounded
              outline
              label="Оформить заказ"
            />
          </q-card>

          <div class="text-h5 column" v-if="viewBasket.length == 0">
            В корзине пока пусто
            <q-btn
              class="text-white q-ma-md"
              rounded
              outline
              label="К товарам"
              @click="openBasket"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { mapActions, mapMutations, mapGetters } from "vuex";

import productItem from "components/productItem.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    productItem,
  },
  setup() {
    return {
      dialog: ref(false),
      search: ref(""),
      selectView: ref(0),
    };
  },
  computed: {
    ...mapGetters(["open", "allProducts", "viewBasket"]),
    totalPrice() {
      let str = "";
      let currency = [];
      this.viewBasket.forEach((element) => {
        currency.push({
          vlt: element.price.currency,
          nmb: element.price.amount,
        });
      });
      this.viewBasket.forEach((element, index) => {
        let total = 0;
        currency
          .filter((item) => item.vlt == element.price.currency)
          .forEach((el) => (total += +el.nmb));
        str +=
          `${index == 0 ? "" : " + "}` + total + " " + element.price.currency;
      });

      return str;
    },
  },
  methods: {
    ...mapMutations(["openBasket"]),
    ...mapActions(["getUserData", "viewAllProducts"]),

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
            item.design.title.toLowerCase().includes(this.search) &&
            item.type == 0
        );
      } else if (this.selectView == 7) {
        return this.allProducts.filter(
          (item) =>
            item.design.title.toLowerCase().includes(this.search) &&
            item.type == 7
        );
      }
    },
  },
  mounted() {
    this.viewAllProducts();
  },
});
</script>
<style lang="scss" scoped>
.my-card {
  min-height: 300px;
  max-height: 350px;
  min-width: 290px;
  flex-grow: 1;
  &-info {
    max-width: 80%;
  }
}
.min-size-xl {
  min-height: 600px;
}
@media (max-width: 450px) {
  .header {
    font-size: 28px;
    line-height: 1.2;
  }
  .footer {
    justify-content: center;
  }
  .min-size-xl {
    min-height: 400px;
  }
}
</style>