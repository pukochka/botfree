<template>
  <div class="max-lg center">
    <div class="user flex items-center q-pa-md flex flex-center">
      <q-avatar
        size="100px"
        font-size="52px"
        color="primary"
        text-color="white"
        icon="person"
      />
      <div class="text-h6 q-pl-md">
        <div class="">
          {{ viewUserData.first_name }} {{ viewUserData.last_name }}
        </div>
        <div class="text-caption">@{{ viewUserData.username }}</div>
      </div>
    </div>

    <q-list separator>
      <q-item clickable>
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="account_balance_wallet"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Баланс</div>
            <div class="text-weight-bold">
              {{ viewUserData.balance }} {{ convertСurrency }}
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('orders')">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="reorder"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Заказы</div>
            <div class="text-weight-bold">{{ viewInfoOrders.count }}</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('rules')">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="gavel"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Правила и помощь в магазине</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('sales')">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="receipt"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Акции в магазине</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('appStyle')">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="style"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Стиль приложения</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="info = !info">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="primary"
            icon="info"
        /></q-item-section>
        <q-item-section class="text-subtitle1">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">О сервисе</div>
          </q-item-label>
        </q-item-section>
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="30px"
            color="transparent"
            text-color="primary"
            :icon="info ? 'arrow_drop_up' : 'arrow_drop_down'"
        /></q-item-section>
      </q-item>
      <q-slide-transition>
        <div v-show="info">
          <div class="q-pa-md">
            <a href="https://bot-t.ru" class="text-grey">
              Сервис создания бесплатных магазинов в телеграм для продажи
              товаров через бота! Бесплатный сервис для создания ботов по
              автоматической продаже товаров в телеграм. Автоматизируйте
              свой...</a
            >
          </div>
        </div>
      </q-slide-transition>
    </q-list>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {
      info: ref(false),
      tab: ref("mails"),
    };
  },
  computed: {
    ...mapGetters(["viewUserData", "viewOrders", "viewInfoOrders", "viewTab"]),
    convertСurrency() {
      switch (this.viewUserData.currency) {
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
          return this.viewUserData.currency;
      }
    },
  },
  methods: {
    ...mapMutations(["changeTabs"]),
    ...mapActions(["getAllProducts"]),
  },
  watch: {},
  mounted() {},
});
</script>
<style lang="scss" scoped>
.button {
  text-transform: none;
  height: 100%;
  &.route {
    flex-grow: 1;
    &.mobile {
      font-size: 12px;
    }
  }
}
.mobile {
  &-footer {
    display: none;
  }
  &-tab {
    text-transform: none;
    font-weight: 600 !important;
    &.bottom {
      font-weight: 400 !important;
      padding: 0;
    }
  }
  &-header {
    display: flex;
  }
}
@media (max-width: 599px) {
  .mobile {
    &-footer {
      display: inline;
    }
    &-header {
      display: none;
    }
  }
}
</style>