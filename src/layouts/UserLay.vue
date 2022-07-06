<template>
  <q-layout view="lHr lpR lFf">
    <q-header bordered class="text-primary-7 row items-center bg-grey-2">
      <q-toolbar>
        <div class="flex no-wrap q-gutter-sm">
          <q-avatar size="40px" rounded color="primary"></q-avatar>
          <q-avatar size="40px" rounded color="purple-4"></q-avatar>
          <q-avatar size="40px" rounded color="orange-4"></q-avatar>
        </div>

        <div class="row full-height q-ml-md" v-if="!width">
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
              @click="changeTabs('catalog')"
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
              @click="changeTabs('basket')"
            >
              <q-badge
                v-if="viewBasket.length != 0"
                class="absolute-top-right"
                rounded
                color="red-4"
                >{{ viewBasket.length }}</q-badge
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
              @click="changeTabs('profile')"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <div class="bg-grey-2">
      <q-separator />
      <div class="q-pa-sm q-px-lg row justify-between items-center">
        <q-btn
          flat
          dense
          color="primary"
          padding="4px 8px"
          label="Другая информация"
        />
        <div class="social q-gutter-md">
          <q-avatar size="30px" color="primary" text-color="white" />
          <q-avatar size="30px" color="blue-4" text-color="white" />
          <q-avatar size="30px" color="purple-4" text-color="white" />
        </div>
      </div>
    </div> -->
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
              @click="changeTabs('catalog')"
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
              @click="changeTabs('basket')"
            >
              <q-badge
                v-if="viewBasket.length != 0"
                class="absolute-top-right"
                rounded
                color="red"
                >{{ viewBasket.length }}</q-badge
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
              @click="changeTabs('profile')"
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
    ...mapGetters(["viewBasket", "viewTab"]),
  },
  methods: {
    ...mapMutations(["changeTabs"]),
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