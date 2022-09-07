<template>
  <div class="max-xxl center q-px-md q-pt-lg">
    <div
      class="fixed-center z-max"
      v-if="viewOrders.loading.index || viewDigital.loading.index"
    >
      <div class="bg-opacity rounded-borders">
        <q-spinner color="secondary" class="q-ma-xl" size="6em" />
      </div>
    </div>
    <div class="flex">
      <div class="text-h4 text-secondary">Мои заказы</div>
      <div class="text-grey-8 text-caption self-end q-ml-sm">
        Заказы {{ viewOrders.count }}
      </div>
    </div>
    <q-separator class="q-mt-sm" :dark="viewUser.theme.is_dark" />
  </div>
  <div class="max-xxl center q-pa-md">
    <div class="text-secondary" v-if="viewOrders.data.length != 0">
      Страница {{ page }} из {{ countOfPages }}
    </div>
    <div
      class="text-h4 text-center q-pa-lg text-secondary"
      v-if="viewOrders.data.length == 0"
    >
      Заказов пока нет
    </div>
    <div
      class="rounded-borders q-my-md"
      :class="themeBack"
      v-for="(order, index) of viewOrders.data"
      :key="index"
    >
      <div class="q-px-sm q-py-sm text-subtitle1 text-secondary">
        <div class="text-weight-bold">
          Заказ от <span class="">{{ order.created_at }}</span>
        </div>
        <div class="text-weight-bold">
          Номер <span class="text-secondary">#{{ order.id }}</span>
        </div>
        <div class="text-weight-bold">
          Итого <span class="text-secondary">{{ order.price }}</span>
        </div>
      </div>
      <q-separator class="q-mx-sm" color="secondary" />
      <div class="">
        <div
          class="row q-col-gutter-sm q-pa-sm"
          v-if="viewUser.bot_data.type.id === 7"
        >
          <div
            class="col-12 col-md-4"
            v-for="(item, index) of order.items"
            :key="index"
          >
            <OrderProduct :item="item" />
          </div>
        </div>
        <div class="q-pa-sm" v-else>
          <OrderProduct :item="CurrentTypeOfBot(order)" />
        </div>
      </div>

      <div
        class="row justify-end q-px-sm q-pb-sm"
        v-if="viewUser.bot_data.type.id === 7"
      >
        <q-btn
          padding="4px 16px"
          flat
          color="secondary"
          label="Подробнее"
          @click="changeOrdersSelect({ order: order, tab: 'selected' })"
        />
      </div>
    </div>

    <div
      class="max-xxl center flex justify-end q-pa-sm q-pb-md"
      v-if="viewOrders.data.length != 0"
    >
      <div class="flex no-wrap items-center">
        <q-btn
          :disable="page == 1"
          dense
          flat
          round
          color="secondary"
          icon="chevron_left"
          @click="prevPage"
        />
        <div class="text-secondary">{{ page }} из {{ countOfPages }}</div>
        <q-btn
          class="cursor-pointer"
          :disable="page == countOfPages"
          dense
          title=""
          flat
          round
          color="secondary"
          icon="chevron_right"
          @click="nextPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import OrderProduct from "src/components/order/OrderProduct.vue";

export default defineComponent({
  components: {
    OrderProduct,
  },
  setup() {
    return {
      page: ref(1),
      offset: ref(0),
    };
  },
  computed: {
    ...mapGetters({
      viewOrders: "order/viewOrders",
      viewUser: "user/viewUser",
      viewDigital: "digital/viewDigital",
    }),
    countOfPages() {
      if (this.viewUser.bot_data.type.id === 7) {
        return Math.ceil(this.viewOrders.count / 3);
      } else return this.viewOrders.count;
    },
    themeColor() {
      return this.viewUser.theme.is_dark ? "bg-dark" : "bg-white";
    },
    themeBack() {
      return this.viewUser.theme.is_dark ? "bg-grey-9" : "bg-grey-2";
    },
  },
  methods: {
    ...mapActions({
      getOrders: "order/getOrders",
      GetDigitalData: "digital/GetDigitalData",
    }),
    ...mapMutations({ changeOrdersSelect: "order/changeOrdersSelect" }),
    CurrentTypeOfBot(item) {
      return { product: item.category };
    },
    convertСurrency(currency) {
      switch (currency) {
        case "RUB":
          return "₽";
        case "USD":
          return "$";
        case "EUR":
          return "€";
        case "UAH":
          return "₴";
        case "KZT":
          return "₸";
        default:
          return currency;
      }
    },
    nextPage() {
      if (this.viewUser.bot_data.type.id === 7) {
        this.getOrders({
          action: "index",
          offset: (this.offset += 3),
        });
      } else {
        this.GetDigitalData({
          action: "index",
          offset: (this.offset += 1),
        });
      }
      this.page++;
    },
    prevPage() {
      if (this.viewUser.bot_data.type.id === 7) {
        this.getOrders({ action: "index", offset: (this.offset -= 3) });
      } else {
        this.GetDigitalData({
          action: "index",
          offset: (this.offset -= 1),
        });
      }
      this.page--;
    },
  },
});
</script>
<style lang="scss" scoped>
.items-inner {
  flex: 250px 1 1;
}
.info {
  position: absolute;
  top: 3px;
  left: 3px;
  font-size: 12px;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
</style>