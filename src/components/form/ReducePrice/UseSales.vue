<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-sm">Скидки в магазине</div>
    <div class="row q-col-gutter-sm">
      <div
        class="col-4 relative-position"
        v-for="(sale, index) of viewInfoSales.value"
        :key="index"
      >
        <q-avatar
          size="50px"
          font-size="50px"
          color="transparent"
          text-color="done"
          icon="done"
          class="absolute-center"
          v-if="false"
        />
        <div class="rounded-borders q-pa-sm fit outline">
          <div class="text-weight-bold text-center">
            {{ sale.info }}
          </div>
          <q-separator spaced="" color="primary" />
          <div class="text-caption text-grey-8 line">
            {{ sale.terms }}
          </div>
        </div>
      </div>
    </div>
    <div class="q-pt-md">
      <div class="text-subtitle1">
        Сумма со скидкой
        <span class="text-weight-bold text-primary">{{ viewBasket.sum }}</span>
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
    ...mapGetters(["viewInfoSales", "viewBasket"]),
  },
  methods: {
    ...mapActions(["actionsWithInfo"]),
  },
  mounted() {
    this.actionsWithInfo({
      action: "shopcart/discount/index",
    });
  },
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