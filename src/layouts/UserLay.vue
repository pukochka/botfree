<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="bg-primary" v-if="!viewUser.no_guest || !width">
      <div class="max-max center flex no-wrap justify-between q-py-xs min-h-ss">
        <div class="">
          <div class="flex no-wrap" v-if="!width">
            <q-btn
              fab
              icon="menu"
              padding="8px 16px"
              size="16px"
              flat
              unelevated
              class="text-weight-bold"
              :class="{
                'text-secondary': viewTabs == 'catalog',
                'text-accent': viewTabs != 'catalog',
              }"
              label="Каталог"
              no-caps
              no-wrap
              @click="correctWork('catalog')"
            />

            <q-btn
              fab
              icon="shopping_cart"
              v-if="viewUser.bot_data?.type?.id === 7"
              padding="8px 16px"
              size="16px"
              flat
              unelevated
              class="text-weight-bold"
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

            <q-btn
              icon="person"
              fab
              padding="8px 16px"
              size="16px"
              flat
              unelevated
              class="text-weight-bold"
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
        <q-btn
          v-if="!viewUser.no_guest"
          dense
          padding="4px 16px"
          size="14px"
          outline
          unelevated
          class="text-weight-bold q-mr-md"
          color="secondary"
          label="Войти"
          no-caps
          no-wrap
          @click="changeDialogs('auth')"
        />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="desktop-only" v-if="viewUser.bot_config?.footer">
      <div class="" v-if="viewUser.bot_config?.kind" v-html="config"></div>
      <div class="" v-else v-html="viewUser.bot_config?.html"></div>
    </div>

    <q-footer bordered class="bg-primary text-secondary mobile-footer" v-if="width">
      <q-toolbar class="" style="padding: 0">
        <div class="fit row">
          <div :class="typeOfBot">
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
          <div class="col-4" v-if="viewUser.bot_data?.type?.id === 7">
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
          <div :class="typeOfBot">
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

import { convertURL } from "../store/helpers";
import HtmlParser from "../configHtmlParser";
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
    config() {
      return HtmlParser(window.BOTCONFIG.html);
    },
    typeOfBot() {
      if (this.viewUser.bot_data?.type?.id === 7) return "col-4";
      else return "col-6";
    },
  },
  methods: {
    ...mapActions({
      getDomain: "user/GetDataByDomain",
      GetBotData: "user/GetBotData",
      GetBotDataByUrl: "user/GetBotDataByUrl",
      GetBotDataByDomain: "user/GetBotDataByDomain",
    }),
    ...mapMutations({
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
  created() {
    // this.GetBotData({
    //   id: 12845,
    //   key: "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e",
    // });
    if (
      window.location.search.includes("bot_id") &&
      window.location.search.includes("secretKey")
    ) {
      this.GetBotDataByUrl();
    } else {
      this.GetBotDataByDomain();
    }
  },
  mounted() {
    // if (window.location.href.includes("/?id")) {
    //   this.getDomain("website");
    // } else if (window.location.href.includes("query_id")) {
    //   let init = convertURL(window.location.search);
    //   this.GetBotData({ id: init.bot_id, key: init.secretKey });
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
