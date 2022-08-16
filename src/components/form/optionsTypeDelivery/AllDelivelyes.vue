<template>
  <div class="flex flex-center min-h-sm" v-if="viewDelivery.loading && !select">
    <q-spinner color="secondary" size="3rem" />
  </div>
  <div class="" v-if="select">
    <div class="text-h6 q-py-md">
      Для того чтобы продолжить необходимо перейти в приложение Telegram.
    </div>
    <q-btn class="full-width" color="secondary" label="Перейти" />
  </div>
  <div class="row q-col-gutter-sm" v-if="!viewDelivery.loading && !select">
    <div
      class="col-12"
      v-for="(delivery, index) of viewDelivery.data"
      :key="index"
    >
      <q-btn
        align="left"
        color="secondary"
        text-color="primary"
        outline
        class="fit"
        no-caps
        @click="
          setDelivery({
            action: 'set-delivery',
            order_id: order.id,
            delivery_id: delivery.id,
          });
          select = !select;
        "
      >
        <div class="text-secondary fit">
          <div class="text-subtitle1 text-weight-bold">
            {{ delivery.title }}
          </div>
          <q-separator color="secondary" class="q-mt-xs q-mb-xs" />
          <div class="text-subtitle2">
            {{ delivery.description }}
          </div>
          <div class="text-weight-bold text-subtitle2">
            Стоимость <span class="text-secondary">{{ delivery.price }}</span>
          </div>
        </div>
      </q-btn>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  setup() {
    return {
      select: ref(false),
    };
  },
  computed: {
    ...mapGetters({
      viewDelivery: "form/viewDelivery",
      order: "order/viewNewOrder",
    }),
  },
  methods: {
    ...mapActions({
      getDelivery: "form/getDelivery",
      setDelivery: "order/getOrders",
    }),
    ...mapMutations({ changeFormSelect: "form/changeFormSelect" }),
  },
  mounted() {
    this.getDelivery({ action: "index" });
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 2px $secondary solid;
}
</style>