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
            class="mobile-tab top text-weight-bold"
            name="mails"
            label="Главная"
            content-class=""
            @click="userValid = false"
            to="/"
          />
          <q-separator vertical />
          <q-tab class="mobile-tab" name="alarms" label="Каталог" />
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
        <!-- <div class="q-ml-md mobile-header q-gutter-xs">
          <q-btn
            flat
            label="Главная"
            to="/"
            class="button text-weight-bold text-subtitle1 full-height"
          />
          <q-separator vertical />
          <q-btn
            flat
            label="Каталог"
            class="button text-weight-bold text-subtitle1"
          />
          <q-separator vertical />
          <q-btn
            flat
            label="Корзина"
            class="button text-weight-bold text-subtitle1"
            @click="openBasket"
          >
            <q-badge
              rounded
              color="orange"
              floating
              v-if="viewBasket.length > 0"
              >{{ viewBasket.length }}</q-badge
            ></q-btn
          >
          <q-separator vertical />
          <q-btn
            flat
            label="Профиль"
            @click="toggleRightDrawer"
            class="button text-weight-bold text-subtitle1"
          />
        </div> -->
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
        <q-item>
          <q-item-section class="text-h6"
            >Баланс : {{ viewUserData.balance }} {{ convertСurrency }}
            <q-btn
              color="teal"
              label="Пополнить"
              class="flex-grow q-my-sm"
              padding="5px"
            />
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
            name="mails"
            icon="home"
            label="Главная"
            @click="userValid = false"
            to="/"
          />
          <q-tab
            class="flex-grow mobile-tab bottom"
            name="alarms"
            icon="manage_search"
            label="Каталог"
          />
          <q-tab
            class="flex-grow mobile-tab bottom"
            name="movies"
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
            name="movies"
            icon="person"
            label="Профиль"
            @click="toggleRightDrawer"
          />
        </q-tabs>
        <!-- <q-btn
          flat
          class="button route"
          padding="0"
          @click="userValid = false"
          to="/"
        >
          <div class="column items-center">
            <q-avatar size="30px" font-size="18px" icon="home" />
            <div class="button route mobile text-weight-bold">Главная</div>
          </div>
        </q-btn>
        <q-btn flat class="button route mobile" padding="0">
          <div class="column items-center">
            <q-avatar size="30px" font-size="18px" icon="manage_search" />
            <div class="button route mobile text-weight-bold">Каталог</div>
          </div>
        </q-btn>
        <q-btn flat class="button route mobile" padding="0" @click="openBasket">
          <q-badge color="orange" floating v-if="viewBasket.length > 0">{{
            viewBasket.length
          }}</q-badge>
          <div class="column items-center">
            <q-avatar size="30px" font-size="18px" icon="shopping_cart" />
            <div class="button route mobile text-weight-bold">Корзина</div>
          </div>
        </q-btn>
        <q-btn
          flat
          class="button route mobile"
          padding="0"
          @click="toggleRightDrawer"
        >
          <div class="column items-center">
            <q-avatar size="30px" font-size="18px" icon="person" />
            <div class="button route mobile text-weight-bold">Профиль</div>
          </div>
        </q-btn> -->
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
    ...mapGetters(["userValid", "viewBasket", "viewUserData"]),
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
    ...mapMutations(["openBasket"]),
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