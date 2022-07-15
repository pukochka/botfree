<template>
  <q-page class="bg-white">
    <q-tab-panels
      class="min"
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
    </q-tab-panels>
    <OrderDanger />
    <div class="bg-grey-2">
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
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import Basket from "src/components/basket/ViewBasket.vue";

import Catalog from "src/components/catalog/ViewCatalog.vue";

import Orders from "src/components/order/ViewOrders.vue";
import FormOrder from "src/components/form/ViewForm.vue";

import Profile from "src/components/profile/ViewProfile.vue";
import AppStyle from "src/components/profile/ProfileStyle.vue";
import BotRules from "src/components/profile/ProfileRules.vue";
import SalesBot from "src/components/profile/ProfileSales.vue";

import OrderDanger from "src/components/infoDialogs/OrderDanger.vue";

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
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["viewTab"]),
  },
  methods: {
    ...mapActions(["getUserData", "getAllProducts"]),
  },
  mounted() {
    this.getUserData();
    this.getAllProducts({ category: 0, text: "" });
  },
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 600px;
}
.min {
  min-height: calc(100vh - 100px);
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