<template>
  <div class="text-weight-bold text-secondary">Доставка</div>
  <q-separator :dark="viewUser.theme.is_dark" />
  <div class="text-subtitle1 text-red" v-if="delivery == null">
    Доставка не была выбрана
  </div>
  <div class="row text-secondary" v-if="delivery != null">
    <div
      class="col-12 col-md-3 col-sm-6 rounded-borders q-pa-sm q-my-sm outline"
    >
      <div class="text-subtitle1 text-center">{{ delivery?.description }}</div>
      <q-separator color="secondary" />
      <div class="text-subtitle1 text-center text-secondary text-weight-bold">
        {{ delivery?.price }}
      </div>
      <div class="text-caption text-secondary">{{ delivery?.title }}</div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["delivery"],
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