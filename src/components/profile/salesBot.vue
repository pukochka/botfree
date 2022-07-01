<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Акции в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfoSales.loading">
      <q-spinner color="primary" size="3rem" />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
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
  },
  mounted() {
    this.actionsWithInfo({
      action: "discount/index",
    });
  },
});
</script>
