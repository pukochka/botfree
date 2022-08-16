<template>
  <q-dialog v-model="viewInfo.dialogs.order.open" persistent>
    <q-card :dark="viewUser.theme.is_dark">
      <q-card-section class="row items-center">
        <span class=""
          >Это действие отменит заказ. Вы уверены, что хотите отменить
          заказ?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          :loading="viewOrders.loading.cancel"
          label="Отменить заказ"
          color="red"
          @click="
            this.getOrders({
              action: 'cancel',
              order_id: viewNewOrder.id,
              is_back_cart: 1,
            })
          "
        />
        <q-btn
          flat
          label="закончить заказ"
          color="secondary"
          @click="changeInfoDialogs({ section: 'order' })"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["option"],
  setup() {
    return {
      text: ref([]),
    };
  },
  computed: {
    ...mapGetters({
      viewInfo: "info/viewInfo",
      viewUser: "user/viewUser",
      viewOrders: "order/viewOrders",
      viewNewOrder: "order/viewNewOrder",
    }),
  },
  methods: {
    ...mapActions({ getOrders: "order/getOrders" }),
    ...mapMutations({
      changeTabs: "user/changeUserTab",
      changeInfoDialogs: "info/changeInfoDialogs",
    }),
  },
});
</script>
<style lang="scss" scoped>
</style>