<template>
  <div class="flex flex-center min-h-sm" v-if="viewDelivery.loading">
    <q-spinner color="secondary" size="3rem" />
  </div>
  <div class="row q-col-gutter-sm" v-if="!viewDelivery.loading">
    <div
      class="col-12"
      v-for="(delivery, index) of viewDelivery.data"
      :key="index"
    >
      <q-btn
        align="left"
        color="secondary"
        outline
        class="fit"
        no-caps
        @click="
          setDelivery({
            action: 'set-delivery',
            order_id: 21228,
            delivery_id: delivery.id,
          })
        "
      >
        <div class="text-grey-9 fit">
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
    return {};
  },
  computed: {
    ...mapGetters({ viewDelivery: "form/viewDelivery" }),
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