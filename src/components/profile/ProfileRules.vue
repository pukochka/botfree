<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Правила и помощь в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfo.loading.rules">
      <q-spinner color="primary" size="3rem" />
    </div>
    <div
      class="q-pa-md text-h6"
      v-if="viewInfo.rules?.help == null && viewInfo.rules?.rules == null"
    >
      Владелец магазина пока не заполнил данную информацию.
    </div>
    <div class="q-py-md" v-if="!viewInfo.loading.rules">
      <div class="text-h6">Помощь</div>
      <div class="">{{ viewInfo.rules?.help }}</div>
    </div>
    <div class="q-py-md" v-if="!viewInfo.loading.rules">
      <div class="text-h6">Правила</div>
      <div class="">{{ viewInfo.rules?.rules }}</div>
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
    ...mapGetters({ viewInfo: "info/viewInfo" }),
  },
  methods: {
    ...mapActions({ getRules: "info/getRules" }),
  },
  mounted() {
    this.getRules();
  },
});
</script>
