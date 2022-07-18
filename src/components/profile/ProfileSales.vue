<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Акции в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfo.loading.sales">
      <q-spinner color="primary" size="3rem" />
    </div>
    <div class="row q-col-gutter-sm q-pt-md" v-if="!viewInfo.loading.sales">
      <div
        class="col-12 col-sm-6"
        v-for="(sale, index) of viewInfo.sales"
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
          <q-separator spaced color="primary" />
          <div class="text-caption text-grey-8">
            {{ sale.terms }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-center q-pa-lg text-h6">
      Данный раздел находится в разработке
    </div> -->
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
  },
  mounted() {
    this.getSales();
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 3px solid $primary;
}
</style>