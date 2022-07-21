<template>
  <div class="max-lg center q-pb-xl">
    <div class="user flex items-center q-pa-md flex flex-center">
      <q-avatar
        size="100px"
        font-size="52px"
        color="secondary"
        text-color="white"
        icon="person"
      />
      <div class="text-h6 q-pl-md">
        <div class="">
          {{ viewUser.data.first_name }} {{ viewUser.data.last_name }}
        </div>
        <div class="text-caption">@{{ viewUser.data.username }}</div>
      </div>
    </div>

    <q-list separator>
      <q-item clickable class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="account_balance_wallet"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Кошелёк</div>
            <div class="text-weight-bold text-secondary">
              {{ viewUser.data.balance }} {{ convertСurrency }}
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('orders')" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="reorder"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Заказы</div>
            <div class="text-weight-bold text-secondary">
              {{ viewOrders.count }}
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('rules')" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="gavel"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Правила и помощь в магазине</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('sales')" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="receipt"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Акции в магазине</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeTabs('appStyle')" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="style"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">Стиль приложения</div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="botinfo = !botinfo" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="info"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">О боте</div>
          </q-item-label>
        </q-item-section>
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="30px"
            color="transparent"
            text-color="secondary"
            :icon="botinfo ? 'arrow_drop_up' : 'arrow_drop_down'"
        /></q-item-section>
      </q-item>
      <q-slide-transition>
        <div v-show="botinfo">
          <div class="">
            <q-list separator>
              <q-item clickable dense>
                <q-item-section avatar> Название </q-item-section>
                <q-item-section class="text-secondary">{{
                  viewInfo.bot.title
                }}</q-item-section>
              </q-item>
              <q-item clickable dense>
                <q-item-section avatar> Тип бота </q-item-section>
                <q-item-section class="text-secondary">{{
                  viewInfo.bot.type
                }}</q-item-section>
              </q-item>
              <q-item clickable dense>
                <q-item-section avatar> Валюта в боте </q-item-section>
                <q-item-section class="text-secondary">{{
                  convertСurrency
                }}</q-item-section>
              </q-item>
              <q-item clickable dense>
                <q-item-section avatar> Язык в боте </q-item-section>
                <q-item-section class="text-secondary">{{
                  viewInfo.bot.language
                }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-slide-transition>
      <q-item clickable @click="info = !info" class="rounded-borders">
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="22px"
            color="transparent"
            text-color="secondary"
            icon="info"
        /></q-item-section>
        <q-item-section class="text-subtitle1 text-secondary">
          <q-item-label lines="1" class="flex items-center justify-between">
            <div class="">О сервисе</div>
          </q-item-label>
        </q-item-section>
        <q-item-section avatar
          ><q-avatar
            size="30px"
            font-size="30px"
            color="transparent"
            text-color="secondary"
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
      botinfo: ref(false),
    };
  },
  computed: {
    ...mapGetters({
      viewUser: "user/viewUser",
      viewInfo: "info/viewInfo",
    }),
    ...mapGetters({
      viewOrders: "order/viewOrders",
    }),
    convertСurrency() {
      switch (this.viewUser.data.currency) {
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
    ...mapMutations({ changeTabs: "user/changeUserTab" }),
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