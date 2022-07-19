<template>
  <div class="text-h5 q-py-md">Примененные скидки</div>
  <div class="row q-col-gutter-sm">
    <div
      class="col-12"
      v-for="(discount, index) of viewBasket.data.discounts"
      :key="index"
    >
      <div class="outline rounded-borders q-pa-sm">
        <div class="text-subtitle1 text-primary text-center">
          {{ discount.info }}
        </div>
        <q-separator />
        <div class="text-subtitle2 text-center">
          {{ discount.terms }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewBasket: "basket/viewBasket" }),
  },
  methods: {},
  mounted() {},
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 3px solid $primary;
  border-radius: 4px;
}
.line {
  line-height: 14px;
}
</style>