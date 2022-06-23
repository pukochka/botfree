<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="text-teal-7 row items-center bg-layout">
      <q-toolbar>
        <div class="flex no-wrap q-gutter-sm">
          <q-avatar size="40px" rounded color="teal"></q-avatar>
          <q-avatar size="40px" rounded color="purple-4"></q-avatar>
          <q-avatar size="40px" rounded color="orange-4"></q-avatar>
        </div>

        <q-tabs
          class="text-weight-bold mobile-header"
          active-bg-color="transparent"
          active-color="teal"
          indicator-color="transparent"
          align="justify"
        >
          <q-tab
            class="mobile-tab"
            label="Каталог"
            @click="
              getAllProducts();
              changeTabs('catalog');
            "
          />
          <q-separator vertical />
          <q-tab
            class="mobile-tab top"
            label="Корзина"
            @click="changeTabs('basket')"
          >
            <q-badge color="orange" floating v-if="viewBasket.length > 0">{{
              viewBasket.length
            }}</q-badge>
          </q-tab>
          <q-separator vertical />
          <q-tab
            class="mobile-tab top"
            label="Профиль"
            @click="changeTabs('profile')"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <div class="absolute-bottom">
      <q-separator />
      <div class="q-pa-sm q-px-lg row justify-between items-center">
        <q-btn
          flat
          dense
          color="teal"
          padding="4px 8px"
          label="Другая информация"
        />
        <div class="social q-gutter-md">
          <q-avatar size="30px" color="teal" text-color="white" />
          <q-avatar size="30px" color="blue-4" text-color="white" />
          <q-avatar size="30px" color="purple-4" text-color="white" />
        </div>
      </div>
    </div> -->
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
            @click="
              getAllProducts();
              changeTabs('catalog');
            "
          />
          <q-tab
            size="12px"
            class="flex-grow mobile-tab bottom"
            icon="shopping_cart"
            label="Корзина"
            @click="changeTabs('basket')"
          >
            <q-badge color="orange" floating v-if="viewBasket.length > 0">{{
              viewBasket.length
            }}</q-badge>
          </q-tab>
          <q-tab
            class="flex-grow mobile-tab bottom"
            icon="person"
            label="Профиль"
            @click="changeTabs('profile')"
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
  setup() {
    return {
      info: ref(false),
      tab: ref("mails"),
    };
  },
  computed: {
    ...mapGetters(["viewBasket", "viewTab"]),
  },
  methods: {
    ...mapMutations(["changeTabs"]),
    ...mapActions(["getAllProducts"]),
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