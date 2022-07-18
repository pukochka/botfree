<template>
  <div class="q-pa-sm max-xxl center">
    <div class="row justify-center" v-if="!width">
      <span
        class="rounded-borders bg-primary text-h6 text-white col-8 text-center"
        >{{ info.bot.title }}</span
      >
    </div>

    <div class="row items-center">
      <div class="my-header">Каталог товаров бота</div>
    </div>
    <q-separator class="q-my-xs" />
  </div>
  <!-- <div class="flex center max-xxl q-gutter-sm">
    <q-btn
      rounded
      outline
      color="primary"
      label="Все категории"
      @click="getProducts({ category: 0, text: '' })"
    />
  </div> -->

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
  <Transition name="fade">
    <div class="fixed-center" v-if="viewProducts.loading">
      <q-spinner color="primary" size="6rem" />
    </div>
  </Transition>
  <Transition name="fade">
    <div
      class="center max-xxl min-size-xl q-px-sm"
      v-if="!viewProducts.loading"
    >
      <div class="">
        <div class="q-py-md row items-center">
          <div
            class="my-header cursor-pointer"
            @click="getProducts({ category: 0, text: '' })"
          >
            Категории
          </div>
          <div class="q-ml-md">
            <q-btn
              rounded
              outline
              padding="4px 32px"
              color="primary"
              icon="chevron_left"
              label="Обратно"
              v-if="viewProducts.now != 0"
              @click="
                getProducts({
                  category: viewProducts.prev,
                  text: viewProducts.textPrev,
                })
              "
            />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
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
      <div class="q-pb-lg">
        <div class="my-header q-py-md">
          Товары
          <span v-if="viewProducts.now != 0"
            >из категории
            <span class="text-primary">{{ viewProducts.textNow }}</span></span
          >
        </div>
        <div class="row q-col-gutter-sm">
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
      viewTab: "viewTab",
    }),
    viewItemsCategory() {
      return this.viewProducts.data.filter((item) => item.type == 0);
    },
    viewItemsProduct() {
      return this.viewProducts.data.filter((item) => item.type != 0);
    },
  },

  methods: {
    ...mapMutations(["changeTabs"]),
    ...mapActions({ getProducts: "products/getProducts" }),
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
.outline {
  outline: 2px solid $primary;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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