<template>
  <q-page class="bg-white">
    <q-tab-panels
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
import AppStyle from "src/components/profile/appStyle.vue";
import BotRules from "src/components/profile/botRules.vue";
import SalesBot from "src/components/profile/salesBot.vue";

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
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["viewTab"]),
  },
  methods: {
    ...mapActions(["getUserData", "getAllProducts", "actionsWithСoupon"]),
  },
  mounted() {
    this.getUserData();
    this.getAllProducts();
  },
});
</script>
<style lang="scss" scoped>
.min-size-xl {
  min-height: 600px;
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