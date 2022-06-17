<template>
  <q-dialog
    maximized
    transition-hide="jump-up"
    transition-show="jump-down"
    transition-duration="150"
    v-model="viewDialOrder"
    persistent
  >
    <q-card class="bg-grey-3">
      <div class="q-py-lg max-xxl center flex justify-between items-center">
        <div class="text-h4 q-pa-sm">Мои заказы</div>
        <q-btn
          color="teal"
          flat
          icon="close"
          label="Закрыть"
          no-caps
          @click="openOrder"
        />
      </div>
      <div class="max-lg center q-pa-sm">
        <q-scroll-area style="width: 100%; height: calc(100vh - 110px)">
          <div
            class="text-h4 text-center q-pa-lg"
            v-if="viewOrders.length == 0"
          >
            Заказов пока нет
          </div>
          <q-card
            class="order-card q-ma-sm"
            v-for="(order, index) of parseOrders"
            :key="index"
          >
            <div
              class="
                flex
                justify-between
                bg-teal
                text-white
                q-pa-sm
                text-weight-bold
              "
            >
              <div class="">Номер заказа</div>
              <div class="">
                <code>#{{ order.order }}</code>
              </div>
            </div>
            <div class="q-pa-md q-gutter-xs text-subtitle1">
              <div class="flex justify-between">
                <div class="">Время</div>
                <div class="">
                  <code>{{ order.time }}</code>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="">Способ</div>
                <div class="">
                  <code>{{ order.method }}</code>
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
                  color="teal"
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
                        bg-teal
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
                      <div class="flex flex-center">{{ item.info }}</div>
                      <div class="flex flex-center">{{ item.price }}</div>
                    </div>
                  </div>
                </div>
              </q-slide-transition>
              <div class="flex justify-between text-weight-bold">
                <div class="">Итоговая цена</div>
                <div class="">{{ order.total }}</div>
              </div>
              <q-separator />
            </div>
          </q-card>
        </q-scroll-area>
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {
      toggle: ref([]),
    };
  },
  computed: {
    ...mapGetters(["viewDialOrder", "viewOrders"]),
    parseOrders() {
      let finish = [];
      this.viewOrders.forEach((element) => {
        let mass = [];
        let div = document.createElement("div");
        div.innerHTML = element[1];

        div.childNodes.forEach((node, index) => {
          if (node.textContent.replace(/💰|\n|💡|🕐|📊|💲|➖|/gi, "") != " ") {
            mass.push(node.textContent.replace(/💰|\n|💡|🕐|📊|💲|➖|/gi, ""));
          }
        });
        mass.forEach((item, index) => {
          if (item == "") {
            mass.splice(index, 1);
          }
        });

        let items = [];
        for (let i = 8; i <= mass.length - 3; i += 2) {
          items.push({
            price: mass[i + 1],
            info: mass[i],
          });
        }
        finish.push({
          order: mass[1],
          time: mass[3],
          method: mass[5],
          status: mass[7],
          total: mass[mass.length - 1],
          items: items,
          toggle: false,
        });
      });

      return finish;
    },
  },
  methods: {
    ...mapMutations(["openOrder"]),
  },
  mounted() {},
  watch: {
    parseOrders() {
      for (let i = 0; i < this.parseOrders.length; i++) {
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