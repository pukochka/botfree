<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Акции в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfoSales.loading">
      <q-spinner color="primary" size="3rem" />
    </div>
    <div class="row q-col-gutter-sm q-pt-md" v-if="!viewInfoSales.loading">
      <div
        class="col-4"
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
        <div
          class="bg-grey-3 rounded-borders q-pa-sm fit outline"
          :class="{ done: false }"
        >
          <div class="text-weight-bold text-center">
            {{ sale.info }}
          </div>
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
    ...mapGetters(["viewInfoSales"]),
  },
  methods: {
    ...mapActions(["actionsWithInfo"]),
    contentText(text) {
      let a = document.createElement("div");
      a.append(text);
      return a.textContent;
    },
  },
  mounted() {
    this.actionsWithInfo({
      action: "shopcart/discount/index",
    });
  },
});
</script>
<style lang="scss" scoped>
.done {
  outline: 3px solid $primary;
  border-radius: 4px;
}
.outline {
  outline: 3px solid $grey-4;
  border-radius: 4px;
}
</style>