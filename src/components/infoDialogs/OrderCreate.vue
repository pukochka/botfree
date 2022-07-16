<template>
  <q-dialog
    v-model="viewOrders.loading.create"
    persistent
    maximized
    transition-show="fade"
    transition-hide="fade"
  >
    <q-card class="bg-opacity flex flex-center">
      <q-spinner color="primary" size="10rem" />
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewOrders: "order/viewOrders" }),
  },
});
</script>
<style lang="scss" scoped>
</style>