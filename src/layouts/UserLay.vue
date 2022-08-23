<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="row items-center bg-primary no-wrap">
      <div class="row no-wrap items-center">
        <div class="q-mx-sm" :class="{ 'q-mx-lg': !width }">
          <q-avatar color="transparent" size="50px" rounded>
            <div class="q-pa-xs fit">
              <img src="~assets/logo.png" alt="bott" />
            </div>
          </q-avatar>
        </div>
      </div>

      <div class="row no-wrap justify-between full-width">
        <div
          class="text-h5 text-secondary text-weight-bold ellipsis text-center"
          v-if="width"
        >
          {{ viewUser.bot_data.name }}
        </div>

        <div class="row no-wrap" v-if="!width">
          <div class="col-4">
            <q-btn
              padding="0 64px"
              size="16px"
              flat
              unelevated
              class="fit text-weight-bold"
              :class="{
                'text-secondary': viewTabs == 'catalog',
                'text-accent': viewTabs != 'catalog',
              }"
              label="Каталог"
              no-caps
              no-wrap
              @click="correctWork('catalog')"
            />
          </div>
          <div class="col-4">
            <q-btn
              size="16px"
              flat
              unelevated
              class="fit text-weight-bold"
              :class="{
                'text-secondary ': viewTabs == 'basket',
                'text-accent': viewTabs != 'basket',
              }"
              label="Корзина"
              no-caps
              no-wrap
              @click="correctWork('basket')"
            >
              <q-badge
                v-if="viewBasket.data.countItems > 0"
                class="absolute-top-right"
                rounded
                color="red-4"
                >{{ viewBasket.data.countItems }}</q-badge
              >
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              size="16px"
              flat
              unelevated
              class="fit text-weight-bold"
              :class="{
                'text-secondary': viewTabs == 'profile',
                'text-accent': viewTabs != 'profile',
              }"
              color="secondary"
              label="Профиль"
              no-caps
              no-wrap
              @click="correctWork('profile')"
            />
          </div>
        </div>
      </div>

      <div class="q-pr-md">
        <q-btn
          v-if="!viewUser.no_guest"
          dense
          padding="4px 16px"
          size="16px"
          outline
          unelevated
          class="fit text-weight-bold"
          color="orange"
          label="Войти"
          icon-right="login"
          no-caps
          no-wrap
          @click="changeDialogs('auth')"
        />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="bg-primary text-secondary mobile-footer"
      v-if="width"
    >
      <q-toolbar class="" style="padding: 0">
        <div class="fit row">
          <div class="col-4">
            <q-btn
              flat
              stack
              unelevated
              class="fit column"
              :class="{
                'text-secondary': viewTabs == 'catalog',
                'text-accent': viewTabs != 'catalog',
              }"
              icon="manage_search"
              label="Каталог"
              no-caps
              size="13px"
              @click="correctWork('catalog')"
            />
          </div>
          <div class="col-4">
            <q-btn
              flat
              stack
              unelevated
              class="fit"
              :class="{
                'text-secondary': viewTabs == 'basket',
                'text-accent': viewTabs != 'basket',
              }"
              icon="shopping_cart"
              label="Корзина"
              no-caps
              size="13px"
              @click="correctWork('basket')"
            >
              <q-badge
                v-if="viewBasket.data.countItems > 0"
                class="absolute-top-right"
                rounded
                color="red"
                >{{ viewBasket.data.countItems }}</q-badge
              >
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              flat
              stack
              unelevated
              class="fit"
              :class="{
                'text-secondary': viewTabs == 'profile',
                'text-accent': viewTabs != 'profile',
              }"
              icon="person"
              label="Профиль"
              no-caps
              size="13px"
              @click="correctWork('profile')"
            />
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
      info: ref(false),
      tab: ref("mails"),
    };
  },
  computed: {
    ...mapGetters({
      viewBasket: "basket/viewBasket",
      viewInfo: "info/viewInfo",
      viewTabs: "user/viewTab",
      viewUser: "user/viewUser",
    }),
  },
  methods: {
    ...mapActions({ getDomain: "user/GetDataByDomain" }),
    ...mapMutations({
      signWithWebsite: "user/signWithWebsite",
      signWithTelegram: "user/signWithTelegram",
      changeTabs: "user/changeUserTab",
      changeInfoDialogs: "info/changeInfoDialogs",
      changeDialogs: "user/changeDialogs",
    }),
    correctWork(tab) {
      if (this.viewInfo.dialogs.order.danger) {
        this.changeInfoDialogs({
          section: "order",
          value: tab,
        });
      } else {
        this.changeTabs(tab);
      }
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.getDomain("telegram");
    // if (window.location.href.includes("first_name")) {
    //   this.getDomain("website");
    // } else if (window.Telegram.WebApp.initData != "") {

    // } else this.getDomain();
  },
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
  &-tab {
    text-transform: none;
    font-weight: 600 !important;
    &.bottom {
      font-weight: 400 !important;
      padding: 0;
    }
  }
}
</style>