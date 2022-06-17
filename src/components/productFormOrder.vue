<template>
  <q-dialog maximized v-model="viewDialForm" persistent>
    <q-card class="bg-grey-3">
      <div class="flex justify-between items-center">
        <div class="text-h4">Формирование заказа</div>
        <q-btn
          flat
          dense
          color="teal"
          icon="close"
          label="Закрыть"
          @click="openDialForm"
        />
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["viewDialForm"]),
  },
  methods: {
    ...mapMutations(["openDialForm"]),
  },
});
</script>