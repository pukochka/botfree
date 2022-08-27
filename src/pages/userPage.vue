<template>
  <q-page>
    <q-tab-panels
      :style="{
        'min-height': width ? 'calc(100vh - 105px)' : 'calc(100vh - 51px)',
      }"
      :class="themeColor"
      v-model="viewTab"
      animated
      transition-prev="fade"
      transition-next="fade"
    >
      <q-tab-panel name="catalog" class="q-pa-none">
        <Catalog />
      </q-tab-panel>

      <q-tab-panel name="profile" class="q-pa-none">
        <Profile />
      </q-tab-panel>

      <q-tab-panel name="orders" class="q-pa-none">
        <Orders />
      </q-tab-panel>
      <q-tab-panel name="basket" class="q-pa-none">
        <Basket />
      </q-tab-panel>

      <q-tab-panel name="formsOrders" class="q-pa-none">
        <FormOrder />
      </q-tab-panel>

      <q-tab-panel name="appStyle" class="q-pa-none">
        <AppStyle />
      </q-tab-panel>

      <q-tab-panel name="rules" class="q-pa-none">
        <BotRules />
      </q-tab-panel>

      <q-tab-panel name="sales" class="q-pa-none">
        <SalesBot />
      </q-tab-panel>

      <q-tab-panel name="digital" class="q-pa-none">
        <DigitalSelect />
      </q-tab-panel>
    </q-tab-panels>

    <OrderDanger />
    <NoAuthDialog />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

import Basket from "src/components/basket/ViewBasket.vue";

import Catalog from "src/components/catalog/ViewCatalog.vue";

import Orders from "src/components/order/ViewOrders.vue";
import FormOrder from "src/components/form/ViewForm.vue";

import Profile from "src/components/profile/ViewProfile.vue";
import AppStyle from "src/components/profile/sections/ProfileStyle.vue";
import BotRules from "src/components/profile/sections/ProfileRules.vue";
import SalesBot from "src/components/profile/sections/ProfileSales.vue";

import OrderDanger from "src/components/infoDialogs/OrderDanger.vue";
import NoAuthDialog from "../components/infoDialogs/NoAuthDialog.vue";

import DigitalSelect from "src/components/digital/DigitalSelect.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Catalog,
    Basket,
    Orders,
    FormOrder,
    Profile,
    AppStyle,
    BotRules,
    SalesBot,
    OrderDanger,
    NoAuthDialog,
    DigitalSelect,
  },
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
    };
  },
  computed: {
    ...mapGetters({ viewUser: "user/viewUser", viewTab: "user/viewTab" }),
    themeColor() {
      return this.viewUser.theme.is_dark ? "bg-dark" : "bg-white";
    },
  },
  methods: {
    ...mapActions(["getUserData", "getAllProducts"]),
  },
  mounted() {},
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 600px;
}
.min {
  min-height: calc(100vh - 50px);
}

@media (max-width: 450px) {
  .header {
    font-size: 28px;
    line-height: 1.2;
  }

  .min-size-xl {
    min-height: 400px;
  }
}
@media (max-width: 350px) {
  .footer {
    justify-content: center;
  }
}
</style>