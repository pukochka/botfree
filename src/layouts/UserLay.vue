<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="text-primary-7 row items-center bg-grey-2">
      <q-toolbar>
        <div class="flex no-wrap q-gutter-sm">
          <q-avatar color="brand" size="50px" rounded>
            <div class="q-pa-xs fit">
              <img src="~assets/logo.png" alt="bott" />
            </div>
          </q-avatar>
        </div>

        <div class="row full-height q-ml-sm" v-if="!width">
          <div class="col-4">
            <q-btn
              flat
              unelevated
              class="fit column"
              color="primary"
              icon="manage_search"
              label="Каталог"
              no-caps
              no-wrap
              @click="correctWork('catalog')"
            />
          </div>
          <div class="col-4">
            <q-btn
              flat
              unelevated
              class="fit"
              color="primary"
              icon="shopping_cart"
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
              flat
              unelevated
              class="fit"
              color="primary"
              icon="person"
              label="Профиль"
              no-caps
              no-wrap
              @click="correctWork('profile')"
            />
          </div>
        </div>
      </q-toolbar>
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
              class="fit column"
              color="primary"
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
              color="primary"
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
              class="fit"
              color="primary"
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
      viewTab: "viewTab",
      viewInfoDialogs: "viewInfoDialogs",
    }),
  },
  methods: {
    ...mapMutations(["changeTabs", "changeInfoDialogs"]),
    correctWork(tab) {
      if (this.viewInfoDialogs.createOrder.danger) {
        this.changeInfoDialogs({ dialog: "createOrder", view: tab });
      } else {
        this.changeTabs(tab);
      }
    },
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