<template>
  <div class="max-xxl center q-pt-lg q-px-md">
    <div class="my-header">Формирование заказа</div>

    <q-separator class="q-my-xs" />
  </div>
  <div class="max-xxl center q-px-md">
    <div class="max-md center q-ml-md text-grey-8 text-caption">
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
        <UseBalance />
      </q-tab-panel>
      <q-tab-panel name="2">
        <UseGifts />
        <UseGiftFromGroup />
      </q-tab-panel>
      <q-tab-panel name="3">
        <FormDelivery />
      </q-tab-panel>
      <q-tab-panel name="4">
        <FormPay />
      </q-tab-panel>
    </q-tab-panels>
    <div class="max-md center">
      <div class="row q-col-gutter-sm">
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
      <div class="row q-mb-lg q-mt-sm">
        <div class="col-12">
          <q-btn flat color="red-6" label="Отменить заказ" class="fit" />
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
import UseGifts from "src/components/form/ReducePrice/UseGifts.vue";
import UseBalance from "src/components/form/ReducePrice/UseBalance.vue";
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
    UseGifts,
    FormDelivery,
    UseBalance,
    FormPay,
  },
  computed: {
    ...mapGetters({
      viewDelivery: "form/viewDelivery",
      viewCoupon: "form/viewCoupon",
      viewBasket: "basket/viewBasket",
    }),
  },
  methods: {
    ...mapActions({ getOrders: "order/getOrders" }),
    next() {
      if (this.step == this.steps.length - 1) return;
      this.step++;
    },
    prev() {
      if (this.step == 0) return;
      this.step--;
    },
    currentCountOfSteps() {
      if ("gifts".length != 0) {
        this.steps.push("1");
      }
      // if ("gifts".length != 0) {
      //   this.steps.push("2");
      // }
      if ("delivery".length != 0) {
        this.steps.push("3");
      }
      if ("pay".length != 0) {
        this.steps.push("4");
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