<template>
  <q-dialog
    maximized
    v-model="viewDialForm"
    persistent
    transition-hide="jump-up"
    transition-duration="150"
    transition-show="jump-down"
  >
    <q-card class="bg-grey-3">
      <div class="max-xl center flex justify-between no-wrap q-py-lg q-px-md">
        <div class="text-h4">Формирование заказа</div>
        <q-btn
          class="self-start"
          no-wrap
          flat
          dense
          color="teal"
          icon="close"
          size="23px"
          @click="openDialForm"
        />
      </div>
      <div class="max-xl center q-px-md">
        <!-- <q-spinner color="primary" size="3em" /> -->
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
                  text-color="teal"
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
                  text-color="teal"
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
            color="teal"
            borderless
            outlined
            v-model="text"
            type="text"
            label="Город"
            class="input"
          />
          <q-input
            color="teal"
            borderless
            outlined
            v-model="text"
            type="text"
            class="input"
            label="Улица"
          />
          <q-input
            color="teal"
            borderless
            outlined
            class="input"
            v-model="text"
            type="text"
            label="Дом"
          />
          <q-input
            borderless
            color="teal"
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
                  text-color="teal"
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
                  text-color="teal"
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
                  text-color="teal"
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
                  text-color="teal"
                  icon="pin_drop"
                />
              </div>
              <div class="text-h6 q-pl-md">Оплата при получении</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="max-xl center q-px-md">
        <div class="text-h6">Коментарии к заказу</div>
        <q-input
          class="q-pa-md"
          color="teal"
          borderless
          outlined
          dense
          v-model="text"
          autogrow
        />
      </div>
      <div class="flex flex-center q-pa-xl">
        <q-btn
          @click="initsOrder"
          :loading="initOrder"
          padding="8px 64px"
          color="teal"
          label="Перейти к оплате"
        />
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
  setup() {
    return {
      selectWay: ref(null),
      selectPay: ref(null),
      initOrder: ref(false),
      text: ref(""),
    };
  },
  computed: {
    ...mapGetters(["viewDialForm"]),
  },
  methods: {
    ...mapMutations(["openDialForm"]),
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
  outline: 3px solid $teal;
}
.card {
  transition: 0.3s all;
  flex-grow: 1;
}
.input {
  flex-grow: 1;
}
</style>