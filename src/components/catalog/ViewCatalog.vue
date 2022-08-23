<template>
  <div class="">
    <span class="text-red">lll </span>{{ viewUser.init_telegram
    }}<span class="text-red"> lll</span>
  </div>
  <div class="">
    <span class="text-red">lll </span>{{ viewUser.bot_data
    }}<span class="text-red"> lll</span>
  </div>
  <div class="row max-xxl center" v-if="!width">
    <span
      class="
        rounded-borders
        text-secondary text-h4
        col-12
        decoration
        text-weight-bolder
        q-pa-sm
      "
      >{{ info.bot.title }}</span
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
          class="q-mt-md"
          flat
          color="secondary"
          icon="chevron_left"
          @click="getProducts({ category: 0, text: '' })"
        />
        <!-- <q-btn
          class="q-mt-md"
          flat
          color="secondary"
          icon="update"
          @click="initApp"
        /> -->
        <div
          class="q-py-md row items-center"
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
import { convertURL } from "src/store/helpers";

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
  },

  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
      getReferalBalance: "form/getReferalBalance",
    }),
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