<template>
  <div class="text-weight-bold text-secondary">Способ оплаты</div>
  <q-separator :dark="viewUser.theme.is_dark" />
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
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
  },
});
</script>
<style lang="scss" scoped>
</style>