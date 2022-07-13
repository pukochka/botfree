<template>
  <div class="max-xxl center q-pt-lg q-px-md">
    <div class="my-header">Формирование заказа</div>

    <q-separator class="q-my-xs" />
  </div>
  <div class="max-xxl center q-px-md">
    <div class="q-ml-md text-grey-8 text-center">
      Шаг {{ step + 1 }} из {{ steps.length }}
    </div>
    <q-tab-panels
      class="min"
      v-model="steps[step]"
      animated
      transition-prev="fade"
      transition-next="fade"
    >
      <q-tab-panel name="1">
        <UseCoupon />
      </q-tab-panel>
      <q-tab-panel name="2">
        <UseSales />
      </q-tab-panel>
      <q-tab-panel name="3">
        <UseGifts />
        <UseGiftFromGroup />
      </q-tab-panel>
      <q-tab-panel name="4">
        <FormDelivery />
      </q-tab-panel>
      <q-tab-panel name="5">
        <FormPay />
      </q-tab-panel>
    </q-tab-panels>
    <div class="max-md center">
      <div class="row q-col-gutter-sm q-mb-lg">
        <div class="col-6">
          <q-btn
            flat
            color="primary"
            label="Назад"
            class="fit"
            @click="prev"
            v-if="step != 0"
          />
        </div>
        <div class="col-6">
          <q-btn
            color="primary"
            :label="step != steps.length - 1 ? 'Продолжить' : 'Оплатить'"
            class="fit"
            unelevated
            @click="next"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

import FormPay from "src/components/form/FormPay.vue";
import FormDelivery from "src/components/form/FormDelivery.vue";
import UseCoupon from "src/components/form/ReducePrice/UseCoupon.vue";
import UseSales from "src/components/form/ReducePrice/UseSales.vue";
import UseGifts from "src/components/form/ReducePrice/UseGifts.vue";
import UseGiftFromGroup from "src/components/form/ReducePrice/UseGiftFromGroup.vue";

export default defineComponent({
  setup() {
    return {
      step: ref(0),
      steps: ref([]),
    };
  },
  components: {
    UseGiftFromGroup,
    UseSales,
    UseGifts,
    UseCoupon,
    FormDelivery,
    FormPay,
  },
  computed: {
    ...mapGetters(["viewDelivery"]),
  },
  methods: {
    next() {
      if (this.step == this.steps.length - 1) return;
      this.step++;
    },
    prev() {
      if (this.step == 0) return;
      this.step--;
    },
    currentCountOfSteps() {
      if ("coupons".length != 0) {
        this.steps.push("1");
      }
      if ("sales".length != 0) {
        this.steps.push("2");
      }
      if ("gifts".length != 0) {
        this.steps.push("3");
      }
      if ("delivery".length != 0) {
        this.steps.push("4");
      }
      if ("pay".length != 0) {
        this.steps.push("5");
      }
      console.log(this.steps);
    },
  },
  mounted() {
    this.currentCountOfSteps();
  },
});
</script>
<style lang="scss" scoped>
.select {
  transition: 0.3s all;
  outline: 3px solid $primary;
}
.card {
  transition: 0.3s all;
  flex-grow: 1;
}
.input {
  flex-grow: 1;
}
</style>