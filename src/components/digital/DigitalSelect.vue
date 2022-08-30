<template>
  <div class="max-lg center">
    <div
      class="bg-primary"
      :class="{ 'flex flex-center': !product.design.image }"
    >
      <q-avatar
        size="56px"
        font-size="40px"
        color="transparent"
        text-color="secondary"
        icon="image"
        v-if="!product.design.image"
      />
      <div
        class="img"
        :style="{ 'background-image': `url(${product.design.image})` }"
      ></div>
    </div>
    <div class="q-pt-md">
      <div class="text-h5 text-secondary q-pt-md">
        {{ product.design.title }}
      </div>
      <div class="text-subtitle2 text-secondary">
        {{ product.design.rules }}
      </div>
    </div>
    <div class="text-subtitle1 text-orange">
      Внимание после выбора доставки, Вас перенаправит в бота!
    </div>
    <div class="q-my-sm">
      <DigitalCoupon />
    </div>
    <div class="q-my-sm">
      <DigitalSales />
    </div>
    <div class="flex justify-between q-px-md">
      <div class="text-secondary text-weight-bold text-h6">Итого</div>
      <div class="text-secondary text-weight-bold text-h6">
        {{ viewDigitalOrder.price.full }}
      </div>
    </div>
    <q-separator color="secondary" class="q-mx-md" />

    <div class="row">
      <q-btn color="red" flat label="Отменить заказ" class="col-12" />
      <q-btn color="secondary" label="Оплатить" class="col-12" />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

import DigitalCoupon from "./DigitalCoupon.vue";
import DigitalSales from "./DigitalSales.vue";

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
    };
  },
  computed: {
    ...mapGetters({ viewDigitalOrder: "digital/viewDigital" }),
    product() {
      return this.viewDigitalOrder.product;
    },
  },
});
</script>
<style lang="scss" scoped>
.img {
  min-height: 200px;
  max-height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>