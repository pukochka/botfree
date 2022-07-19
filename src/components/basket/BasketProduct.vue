<template>
  <q-card class="flex no-wrap col q-my-xs relative-position">
    <Transition name="fade">
      <div
        class="absolute fit flex flex-center bg-opacity z-max"
        v-if="
          (viewBasket.loading['subtract'] ||
            viewBasket.loading['remove'] ||
            viewBasket.loading['add'] ||
            viewBasket.loading['set-count']) &&
          viewBasket.elem == product.id
        "
      >
        <q-spinner color="primary" size="5rem" class="z-max" />
      </div>
    </Transition>
    <div class="bg-primary width flex flex-center q-ma-xs">
      <q-avatar
        size="36px"
        font-size="30px"
        color="transparent"
        text-color="white"
        icon="image_not_supported"
      />
    </div>
    <div class="column justify-between q-pa-md" style="flex-grow: 1">
      <div class="">
        <div class="end-dots title">{{ product.design.title }}</div>
        <div class="text-caption text-weight-bold text-grey-7 end-dots caption">
          {{ product.design.rules }}
        </div>
      </div>

      <div class="row items-center" :class="{ 'q-gutter-sm': width }">
        <div class="row col-sm-6 col-12">
          <div class="col-6">
            <q-btn
              color="primary"
              dense
              flat
              no-wrap
              class="text-h6 text-weight-bold"
              padding="0px 4px"
              :label="product.price.amount + ' ' + convertСurrency"
            />
          </div>
          <div class="col-6" :class="{ 'flex justify-end': width }">
            <q-btn
              dense
              flat
              color="primary"
              icon="clear"
              no-caps
              no-wrap
              @click="getBasket({ action: 'remove', category_id: product.id })"
            />
          </div>
        </div>

        <div class="col-sm-6 col-12">
          <BasketButtonGroup :prod="product" />
        </div>
      </div>
    </div>
  </q-card>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

import BasketButtonGroup from "src/components/basket/BasketButtonGroup.vue";
export default {
  props: ["product"],
  components: {
    BasketButtonGroup,
  },
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });

    return { width };
  },
  computed: {
    ...mapGetters({
      viewBasket: "basket/viewBasket",
    }),
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
    ...mapActions({ getBasket: "basket/getBasket" }),
  },
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}
.caption {
  line-height: 14px;
  margin-bottom: 6px;
}
.width {
  min-width: 35%;
  min-height: 120px;
  border-radius: 4px !important;
}
</style>