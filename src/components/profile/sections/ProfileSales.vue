<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4 text-secondary">Акции в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfo.loading.sales">
      <q-spinner color="secondary" size="3rem" />
    </div>
    <div
      class="text-secondary text-h5"
      v-if="viewInfo.sales.length === 0 && !viewInfo.loading.sales"
    >
      В магазине скидок нет
    </div>
    <div class="row q-col-gutter-sm q-pt-md" v-if="!viewInfo.loading.sales">
      <div
        class="col-12 col-sm-6"
        v-for="(sale, index) of viewInfo.sales"
        :key="index"
      >
        <div class="rounded-borders q-pa-sm fit outline">
          <div class="text-weight-bold text-center">
            {{ TagParser(sale.info) }}
          </div>
          <q-separator spaced color="secondary" />
          <div class="text-grey-8">
            {{ TagParser(sale.terms) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createTextVNode, defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewInfo: "info/viewInfo" }),
  },
  methods: {
    ...mapActions({ getSales: "info/getSales" }),
    TagParser(word) {
      let str = word;
      for (let tag of ["b", "i", "em", "small", "strong", "q", "s", "u"]) {
        let rgx = new RegExp(`<${tag}>`);
        str = str.replace(rgx, "");
        rgx = new RegExp(`</${tag}>`);
        str = str.replace(rgx, "");
      }
      return str;
    },
  },
  mounted() {
    this.getSales();
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 1px solid $secondary;
}
</style>