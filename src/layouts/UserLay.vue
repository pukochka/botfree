<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="text-primary-7 row items-center bg-grey-2">
      <div
        class="fit text-h5 text-primary q-pa-sm text-weight-bold"
        v-if="width"
      >
        {{ viewInfo.bot.title }}
      </div>
      <div class="row" v-if="!width">
        <div class="q-ml-lg">
          <q-avatar color="brand" size="50px" rounded>
            <div class="q-pa-xs fit">
              <img src="~assets/logo.png" alt="bott" />
            </div>
          </q-avatar>
        </div>

        <div class="row no-wrap">
          <div class="col-4">
            <q-btn
              padding="0 64px"
              size="16px"
              flat
              unelevated
              class="fit text-weight-bold text-teal-5"
              :class="{ 'text-teal-9': viewTabs == 'catalog' }"
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
              class="fit text-weight-bold text-teal-5"
              :class="{ 'text-teal-9 ': viewTabs == 'basket' }"
              label="Корзина"
              no-caps
              no-wrap
              @click="correctWork('basket')"
            >
              <q-badge
                v-if="viewBasket.data.countItems != 0"
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
              class="fit text-weight-bold text-teal-5"
              :class="{ 'text-teal-9': viewTabs == 'profile' }"
              color="primary"
              label="Профиль"
              no-caps
              no-wrap
              @click="correctWork('profile')"
            />
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      class="bg-grey-2 text-primary mobile-footer"
      v-if="width"
    >
      <q-toolbar class="" style="padding: 0">
        <div class="fit row">
          <div class="col-4">
            <q-btn
              flat
              stack
              unelevated
              class="fit column text-teal-5"
              :class="{ 'text-teal-9': viewTabs == 'catalog' }"
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
              class="fit text-teal-5"
              :class="{ 'text-teal-9': viewTabs == 'basket' }"
              icon="shopping_cart"
              label="Корзина"
              no-caps
              size="13px"
              @click="correctWork('basket')"
            >
              <q-badge
                v-if="viewBasket.data.countItems != 0"
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
              class="fit text-teal-5"
              :class="{ 'text-teal-9': viewTabs == 'profile' }"
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
import { mapMutations, mapGetters } from "vuex";
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
    }),
  },
  methods: {
    ...mapMutations({
      initApp: "user/initApp",
      changeTabs: "user/changeUserTab",
      changeInfoDialogs: "info/changeInfoDialogs",
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
  mounted() {
    this.initApp();
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