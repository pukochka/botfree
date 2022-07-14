<template>
  <div class="text-weight-bold">Способ оплаты</div>
  <q-separator />
  <div class="text-subtitle1 text-red" v-if="payment == null">
    Способ оплаты не был выбран
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["payment"],
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
</style>