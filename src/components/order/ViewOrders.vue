<template>
  <div class="max-xxl center q-px-md q-pt-lg">
    <div class="flex">
      <div class="text-h4">Мои заказы</div>
      <div class="text-grey-8 text-caption self-end q-ml-sm">
        Заказы {{ viewInfoOrders.count }}
      </div>
    </div>
    <q-separator />
  </div>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4 text-center q-pa-lg" v-if="viewInfoOrders.length == 0">
      Заказов пока нет
    </div>
    <div class="" v-for="(order, index) of viewOrders" :key="index">
      <div class="q-pt-lg" :class="{ row: !widthmd, column: widthmd }">
        <div
          class="col-2 row"
          :class="{ 'q-ma-sm': widthmd, 'q-my-sm': !widthmd }"
          style="max-height: 160px"
        >
          <div class="col-12 col-sm-2 col-md-12">
            <q-btn
              color="primary"
              :label="order.price"
              flat
              size="26px"
              padding="0"
              no-wrap
              :ripple="false"
              class="fit text-wight-bold"
            />
          </div>
          <div
            class="
              col-12 col-sm-10 col-md-12
              bg-primary
              rounded-borders
              relative-position
              q-pa-sm
            "
          >
            <div class="column">
              <div class="">
                <div class="text-white text-h6 text-center">
                  Заказ #{{ order.id }}
                </div>
                <q-btn
                  :class="{
                    'absolute-bottom': !widthmd,
                    'absolute-right': widthmd,
                  }"
                  color="white"
                  icon="arrow_drop_down"
                  flat
                />
              </div>
            </div>
            <q-menu
              fit
              transition-show="fade"
              transition-hide="fade"
              :anchor="!widthmd ? 'top right' : 'bottom left'"
            >
              <order-info :order="order" />
            </q-menu>
          </div>
        </div>

        <div class="col-10">
          <order-item :order="order" />
        </div>
      </div>
      <div class="q-mx-sm flex justify-between">
        <div class="text-h6 text-weight-bold">Итоговая цена</div>
        <div class="text-h6 text-weight-bold">{{ order.price }}</div>
      </div>
      <q-separator class="q-mt-lg" v-if="index != 2" />
    </div>

    <div
      class="absolute-center flex justify-center fit bg-layout"
      v-if="viewInfoOrders.loading"
    >
      <q-spinner color="primary" class="q-ma-xl" size="3em" />
    </div>

    <div class="max-xxl center flex justify-end q-pa-sm q-pb-md">
      <div class="flex no-wrap items-center q-gutter-sm">
        <q-btn
          :disable="page == 1"
          dense
          flat
          round
          color="primary"
          icon="chevron_left"
          @click="prevPage"
        />
        <div class="">{{ page }} из {{ countOfPages }}</div>
        <q-btn
          class="cursor-pointer"
          :disable="page == countOfPages"
          dense
          title=""
          flat
          round
          color="primary"
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
import { useQuasar } from "quasar";
import { computed } from "vue";

import orderItem from "src/components/order/productOrder.vue";
import orderInfo from "src/components/order/orderInfo.vue";

export default defineComponent({
  components: {
    orderItem,
    orderInfo,
  },
  setup() {
    const $q = useQuasar();
    const widthmd = computed(() => {
      return $q.screen.lt.md;
    });
    const widthsm = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      widthmd,
      widthsm,
      toggle: ref([false, false, false]),
      page: ref(1),
      offset: ref(0),
    };
  },
  computed: {
    ...mapGetters(["viewOrders", "viewInfoOrders"]),
    countOfPages() {
      return Math.ceil(this.viewInfoOrders.count / 3);
    },
  },
  methods: {
    ...mapActions(["actionsWithOrders"]),
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
      this.actionsWithOrders({
        action: "index",
        offset: (this.offset += 3),
      });
      this.page++;
      window.scrollTo({ top: 0 });
    },
    prevPage() {
      this.actionsWithOrders({ action: "index", offset: (this.offset -= 3) });
      this.page--;
      window.scrollTo({ top: 0 });
    },
  },
  mounted() {},
  watch: {},
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