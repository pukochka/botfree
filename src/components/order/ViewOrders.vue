<template>
  <div class="q-py-lg max-xxl center flex justify-between items-center">
    <div class="text-h4 q-pa-sm">Мои заказы</div>
  </div>
  <div class="max-lg center q-pa-sm">
    <div class="text-h4 text-center q-pa-lg" v-if="viewOrders.length == 0">
      Заказов пока нет
    </div>

    <q-card
      class="order-card q-ma-sm"
      v-for="(order, index) of viewOrders"
      :key="index"
    >
      <div
        class="
          flex
          justify-between
          bg-primary
          text-white
          q-pa-sm
          text-weight-bold
        "
      >
        <div class="">Номер заказа</div>
        <div class="">
          <code>#{{ order.id }}</code>
        </div>
      </div>
      <div class="q-pa-md q-gutter-xs text-subtitle1">
        <div class="flex justify-between">
          <div class="">Время</div>
          <div class="">
            <code>{{ order.created_at }}</code>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="">Способ</div>
          <div class="">
            <code>{{ order.shop_id }}</code>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="">Статус</div>
          <div class="">
            <code>{{ order.status }}</code>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="">Товары</div>
          <q-btn
            color="primary"
            padding="0 10px"
            flat
            :icon="toggle[index] ? 'arrow_drop_up' : 'arrow_drop_down'"
            @click="toggle[index] = !toggle[index]"
          />
        </div>
        <q-slide-transition>
          <div v-show="toggle[index]" class="">
            <div class="flex wrap">
              <div
                class="
                  text-subtitle2
                  rounded-borders
                  bg-primary
                  text-white
                  q-pa-sm q-ma-xs
                  items-inner
                  relative-position
                "
                v-for="(item, indexitem) in order.items"
                :key="indexitem"
              >
                <div class="info bg-white text-grey-8">
                  {{ indexitem + 1 }}
                </div>
                <div class="flex flex-center">
                  {{ item.product.design.title }}
                </div>
                <div class="flex flex-center">
                  {{
                    item.count +
                    " шт. x " +
                    item.product.price.amount +
                    " " +
                    convertСurrency(item.product.price.currency)
                  }}
                </div>
              </div>
            </div>
          </div>
        </q-slide-transition>
        <div class="flex justify-between text-weight-bold">
          <div class="">Итоговая цена</div>
          <div class="">{{ order.price }}</div>
        </div>
        <q-separator />
      </div>
    </q-card>
    <div
      class="absolute-center flex justify-center fit bg-layout"
      v-if="viewInfoOrders.loading"
    >
      <q-spinner color="primary" class="q-ma-xl" size="3em" />
    </div>

    <div class="max-xl center flex justify-end q-pa-sm q-pb-xl">
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

export default defineComponent({
  setup() {
    return {
      toggle: ref([]),
      page: ref(1),
      offset: ref(0),
    };
  },
  computed: {
    ...mapGetters(["viewOrders", "viewInfoOrders"]),
    countOfPages() {
      if (Math.round(this.viewInfoOrders.count / 3) == 0) {
        return 1;
      } else {
        return Math.round(this.viewInfoOrders.count / 3);
      }
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
    },
    prevPage() {
      this.actionsWithOrders({ action: "index", offset: (this.offset -= 3) });
      this.page--;
    },
  },
  mounted() {},
  watch: {
    viewOrders() {
      for (let i = 0; i < this.viewOrders.length; i++) {
        this.toggle.push(false);
      }
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