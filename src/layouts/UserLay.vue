<template>
  <q-layout view="lHr lpR lFf">
    <q-header
      bordered
      class="text-teal-7 row items-center bg-layout"
      height-hint="78"
      style="height: 60px"
    >
      <q-toolbar>
        <div class="flex no-wrap q-gutter-sm">
          <q-avatar size="40px" rounded color="teal"></q-avatar>
          <q-avatar size="40px" rounded color="purple-4"></q-avatar>
          <q-avatar size="40px" rounded color="orange-4"></q-avatar>
        </div>

        <q-tabs
          v-model="tab"
          class="text-weight-bold mobile-header"
          active-bg-color="transparent"
          active-color="teal"
          indicator-color="transparent"
          align="justify"
        >
          <q-tab
            class="mobile-tab"
            name="alarms"
            label="Каталог"
            @click="getAllProducts()"
          />
          <q-separator vertical />
          <q-tab
            class="mobile-tab top"
            name="movies"
            label="Корзина"
            @click="openBasket"
          >
            <q-badge color="orange" floating v-if="viewBasket.length > 0">{{
              viewBasket.length
            }}</q-badge>
          </q-tab>
          <q-separator vertical />
          <q-tab
            class="mobile-tab top"
            name="movies"
            label="Профиль"
            @click="toggleRightDrawer"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
      <div class="user flex items-center q-pa-md">
        <q-avatar
          size="70px"
          font-size="52px"
          color="teal"
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

      <q-list>
        <q-item clickable>
          <q-item-section avatar
            ><q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="teal"
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
        <q-item clickable @click="openOrder()">
          <q-item-section avatar
            ><q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="teal"
              icon="reorder"
          /></q-item-section>
          <q-item-section class="text-subtitle1">
            <q-item-label lines="1" class="flex items-center justify-between">
              <div class="">Заказы</div>
              <div class="text-weight-bold">{{ viewOrders.length }}</div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar
            ><q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="teal"
              icon="gavel"
          /></q-item-section>
          <q-item-section class="text-subtitle1">
            <q-item-label lines="1" class="flex items-center justify-between">
              <div class="">Правила</div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar
            ><q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="teal"
              icon="help"
          /></q-item-section>
          <q-item-section class="text-subtitle1">
            <q-item-label lines="1" class="flex items-center justify-between">
              <div class="">Помощь</div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar
            ><q-avatar
              size="30px"
              font-size="22px"
              color="transparent"
              text-color="teal"
              icon="info"
          /></q-item-section>
          <q-item-section class="text-subtitle1">
            <q-item-label lines="1" class="flex items-center justify-between">
              <div class="">О сервисе</div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-2 text-teal mobile-footer">
      <q-toolbar class="flex justify-between" style="padding: 0">
        <q-tabs
          v-model="tab"
          dense
          active-bg-color="transparent"
          active-color="teal"
          indicator-color="transparent"
          class="bg-white full-width shadow-1"
          align="justify"
          content-class="mobile-tab"
        >
          <q-tab
            class="flex-grow mobile-tab bottom"
            icon="manage_search"
            label="Каталог"
            @click="getAllProducts()"
          />
          <q-tab
            size="12px"
            class="flex-grow mobile-tab bottom"
            icon="shopping_cart"
            label="Корзина"
            @click="openBasket"
          >
            <q-badge color="orange" floating v-if="viewBasket.length > 0">{{
              viewBasket.length
            }}</q-badge>
          </q-tab>
          <q-tab
            class="flex-grow mobile-tab bottom"
            icon="person"
            label="Профиль"
            @click="toggleRightDrawer"
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const rightDrawerOpen = ref(false);
    const mobileSize = ref(false);
    const scr = window.innerWidth;

    return {
      rightDrawerOpen,
      mobileSize,
      scr,
      tab: ref("mails"),
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  computed: {
    ...mapGetters([
      "viewUserValid",
      "viewBasket",
      "viewUserData",
      "viewOrders",
    ]),
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
    ...mapMutations(["openBasket", "openOrder"]),
    ...mapActions(["getAllProducts"]),
  },
  watch: {
    scr(value) {
      console.log(value);
    },
  },
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