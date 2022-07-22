<template>
  <div class="text-weight-bold text-secondary">Использованный купон</div>
  <q-separator :dark="viewUser.theme.is_dark" />
  <div class="text-subtitle1 text-red-5" v-if="coupon == '' || coupon == null">
    Купон не был введён
  </div>
  <div class="row" v-if="coupon != null">
    <div
      class="
        text-subtitle2
        col-12 col-md-3 col-sm-6
        outline
        text-secondary
        q-my-sm q-pa-sm
        rounded-borders
      "
    >
      {{ coupon }}
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["coupon"],
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 1px solid $secondary;
}
</style>