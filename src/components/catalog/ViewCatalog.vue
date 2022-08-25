<template>
  <div class="row max-xxl center">
    <span
      class="
        rounded-borders
        text-secondary
        col-12
        decoration
        text-weight-bolder
        q-pa-sm
      "
      :class="{ 'text-h4': !width, 'text-h6': width }"
      >{{ viewUser.bot_data.name }}</span
    >
  </div>
  <!-- <div class="q-pa-sm max-xxl center">
    <div class="row items-center">
      <div class="my-header text-secondary">Каталог товаров бота</div>
    </div>
    <q-separator class="q-my-xs" :dark="viewUser.theme.is_dark" />
  </div> -->

  <Transition name="fade">
    <div class="fixed-center" v-if="viewProducts.loading">
      <q-spinner color="secondary" size="6rem" />
    </div>
  </Transition>
  <Transition name="fade">
    <div
      class="center max-xxl min-size-xl q-px-sm"
      v-if="!viewProducts.loading"
    >
      <div class="">
        <q-btn
          v-if="viewItemsCategory[0]?.category_id != 0"
          class="q-mt-xs"
          flat
          color="secondary"
          icon="chevron_left"
          @click="getProducts({ category: 0, text: '' })"
        />
        <q-btn
          class="q-mt-xs"
          flat
          color="secondary"
          icon="123"
          @click="testbot(1)"
        />
        <q-btn
          class="q-mt-xs"
          flat
          color="secondary"
          icon="shopping_cart"
          @click="testbot(7)"
        />
        <div
          class="q-pb-md q-pt-sm row items-center"
          v-if="viewItemsCategory.length > 0"
        >
          <div class="my-header text-secondary cursor-pointer">Категории</div>
        </div>
        <div class="row q-col-gutter-xs">
          <div
            class="col-md-3 col-lg-3 col-6"
            v-for="(product, index) of viewItemsCategory"
            :key="index"
            @click="
              getProducts({ category: product.id, text: product.design.title })
            "
          >
            <CategoryProduct :product="product" />
          </div>
        </div>
      </div>
      <div class="q-pb-lg" v-if="viewProducts.now != 0">
        <div class="my-header q-py-md text-secondary">
          Товары
          <span
            >из категории <span class="">{{ viewProducts.textNow }}</span></span
          >
        </div>
        <div class="row q-col-gutter-xs">
          <div
            class="col-md-3 col-lg-3 col-6"
            v-for="(product, index) of viewItemsProduct"
            :key="index"
          >
            <ProductItem class="" :product="product" />
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
  </Transition>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";
import verification from "src/telegram";

import ProductItem from "src/components/product/ProductPattern.vue";
import CategoryProduct from "src/components/product/CategoryProduct.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ProductItem,
    CategoryProduct,
  },
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
      search: ref(""),
    };
  },
  computed: {
    ...mapGetters({
      info: "info/viewInfo",
      viewProducts: "products/viewProducts",
      viewUser: "user/viewUser",
    }),
    viewItemsCategory() {
      return this.viewProducts.data.filter((item) => item.type == 0);
    },
    viewItemsProduct() {
      return this.viewProducts.data.filter((item) => item.type != 0);
    },
    test() {
      return verification(
        {
          auth_date: "1661383668",
          first_name: "Artemi",
          hash: "17b817e797d1d435741412c65082011d530d67616be3d040f1f8a5fd813d9d6f",
          id: "1028741753",
          last_name: "Puka",
          username: "melart1",
        },
        "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e"
      );
    },
  },

  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
      getReferalBalance: "form/getReferalBalance",
    }),
    ...mapMutations({ testbot: "user/test" }),
  },

  created() {},
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
.outline {
  outline: 2px solid $primary;
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
.decoration {
  text-decoration: underline;
}
@media (max-width: 350px) {
  .footer {
    justify-content: center;
  }
}
</style>