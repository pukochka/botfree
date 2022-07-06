<template>
  <div class="max-xxl center q-py-lg q-px-md">
    <div class="my-header">Формирование заказа</div>
    <q-separator class="q-my-sm" />
  </div>
  <div class="max-xxl center q-px-md column">
    <div class="col q-py-md">
      <FormCoupon />
    </div>
    <div class="col q-py-md">
      <FormDelivery />
    </div>
    <div class="col q-py-md">
      <FormPay />
    </div>
  </div>
  <!-- <div class="max-xl center q-px-md">
    <q-spinner color="primary" size="3em" />
    <div class="text-h6">Выберите способ доставки</div>
    <div class="flex q-gutter-md q-pa-md">
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectWay == 'Доставка' }"
        @click="selectWay = 'Доставка'"
      >
        <q-card-section class="flex items-center">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="local_shipping"
            />
          </div>
          <div class="text-h6 q-pl-md">Доставка</div>
        </q-card-section>
      </q-card>
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectWay == 'Самовывоз' }"
        @click="selectWay = 'Самовывоз'"
      >
        <q-card-section class="flex">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="home"
            />
          </div>
          <div class="text-h6 q-pl-md">Самовывоз</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="max-xl center q-px-md">
    <div class="text-h6">Вопросы</div>
    <div class="flex q-gutter-sm q-pa-md">
      <q-input
        style="transition: 0.1s all"
        color="primary"
        borderless
        outlined
        v-model="text"
        type="text"
        label="Город"
        class="input"
      />
      <q-input
        color="primary"
        borderless
        outlined
        v-model="text"
        type="text"
        class="input"
        label="Улица"
      />
      <q-input
        color="primary"
        borderless
        outlined
        class="input"
        v-model="text"
        type="text"
        label="Дом"
      />
      <q-input
        borderless
        color="primary"
        outlined
        class="input"
        v-model="text"
        type="text"
        label="Квартира"
      />
    </div>
  </div>
  <div class="max-xl center q-px-md">
    <div class="text-h6">Способ оплаты</div>
    <div class="flex q-gutter-sm q-pa-md">
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectPay == 'Crypto' }"
        @click="selectPay = 'Crypto'"
      >
        <q-card-section class="flex">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="currency_bitcoin"
            />
          </div>
          <div class="text-h6 q-pl-md">Crypto</div>
        </q-card-section>
      </q-card>
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectPay == 'Банковкая карта' }"
        @click="selectPay = 'Банковкая карта'"
      >
        <q-card-section class="flex">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="credit_card"
            />
          </div>
          <div class="text-h6 q-pl-md">Банковкая карта</div>
        </q-card-section>
      </q-card>
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectPay == 'QIWI' }"
        @click="selectPay = 'QIWI'"
      >
        <q-card-section class="flex">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="monetization_on"
            />
          </div>
          <div class="text-h6 q-pl-md">QIWI</div>
        </q-card-section>
      </q-card>
      <q-card
        class="cursor-pointer card"
        :class="{ select: selectPay == 'Оплата при получении' }"
        @click="selectPay = 'Оплата при получении'"
      >
        <q-card-section class="flex">
          <div class="text-subtitle2">
            <q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="primary"
              icon="pin_drop"
            />
          </div>
          <div class="text-h6 q-pl-md">Оплата при получении</div>
        </q-card-section>
      </q-card>
    </div>
  </div> -->
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import FormPay from "src/components/form/FormPay.vue";
import FormDelivery from "src/components/form/FormDelivery.vue";
import FormCoupon from "src/components/form/FormCoupon.vue";

export default defineComponent({
  setup() {
    return {
      selectWay: ref(null),
      selectPay: ref(null),
      initOrder: ref(false),
      text: ref(""),
    };
  },
  components: {
    FormCoupon,
    FormDelivery,
    FormPay,
  },
  computed: {},
  methods: {
    initsOrder() {
      this.initOrder = true;
      setTimeout(() => {
        this.initOrder = false;
      }, 3000);
    },
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