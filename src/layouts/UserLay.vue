<template>
  <q-layout view="lHr lpR lFf">
    <q-header
      bordered
      class="text-teal-7 row items-center bg-layout"
      height-hint="78"
      style="height: 60px"
    >
      <q-toolbar>
        <div class="q-gutter-sm">
          <q-avatar size="40px" rounded color="teal"></q-avatar>
          <q-avatar size="40px" rounded color="purple-4"></q-avatar>
          <q-avatar size="40px" rounded color="orange-4"></q-avatar>
        </div>

        <div class="q-ml-md mobile-header q-gutter-xs">
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
          />
          <q-separator vertical />
          <q-btn
            flat
            label="Профиль"
            @click="toggleRightDrawer"
            class="button text-weight-bold text-subtitle1"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
      <div class="user flex items-center q-pa-md">
        <q-avatar
          size="70px"
          font-size="52px"
          color="teal"
          text-color="white"
        />
        <div class="text-h6 q-pl-md">Name Surname</div>
      </div>
      <q-separator />
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>Настройки аккаунта</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Управление</q-item-section>
        </q-item>
      </q-list>
      <q-separator />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-2 text-teal-7 mobile-footer">
      <q-toolbar class="flex justify-between" style="padding: 0">
        <q-btn
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
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapMutations, mapGetters } from "vuex";
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
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  methods: {
    ...mapMutations(["openBasket"]),
    ...mapGetters(["userValid"]),
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