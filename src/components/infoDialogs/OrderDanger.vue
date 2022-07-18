<template>
  <q-dialog v-model="viewInfo.dialogs.order.open" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class=""
          >Это действие отменит заказ. Вы уверены, что хотите отменить
          заказ?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Отменить заказ"
          color="red"
          @click="changeTabs(viewInfo.dialogs.order.name)"
        />
        <q-btn
          flat
          label="закончить заказ"
          color="primary"
          @click="changeInfoDialogs({ section: 'order', value: null })"
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
    ...mapGetters({ viewInfo: "info/viewInfo" }),
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