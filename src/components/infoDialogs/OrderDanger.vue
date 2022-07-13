<template>
  <q-dialog v-model="viewInfoDialogs.createOrder.open" persistent>
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
          @click="changeTabs(viewInfoDialogs.createOrder.value)"
        />
        <q-btn
          flat
          label="закончить заказ"
          color="primary"
          @click="changeInfoDialogs({ dialog: 'createOrder', view: null })"
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
    ...mapGetters(["viewInfoDialogs"]),
  },
  methods: {
    ...mapMutations(["changeInfoDialogs", "changeTabs"]),
  },
});
</script>
<style lang="scss" scoped>
</style>