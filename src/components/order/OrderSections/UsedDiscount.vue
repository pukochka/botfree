<template>
  <div class="text-weight-bold">Примененная скидка</div>
  <q-separator />
  <div class="text-subtitle1 text-red-5" v-if="!checkDiscount">
    Скидка не применялась
  </div>
  <div class="row" v-if="checkDiscount">
    <div class="col-12 col-md-3 col-sm-6">
      <div class="bg-white outline rounded-borders q-pa-sm q-my-sm">
        <div class="text-subtitle1 text-center">{{ checkDiscount.info }}</div>
        <q-separator color="secondary" />
        <div class="text-caption">{{ checkDiscount.terms }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["item"],
  setup() {
    return {};
  },
  computed: {
    checkDiscount() {
      return this.item.discounts.find(
        (item) => item.id == this.item.discount.discount_id
      );
    },
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 1px solid $secondary;
}
</style>