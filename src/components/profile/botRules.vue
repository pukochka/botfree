<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Правила и помощь в магазине</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfoRules.loading">
      <q-spinner color="primary" size="3rem" />
    </div>
    <div
      class="q-pa-md text-h6"
      v-if="viewInfoRules.value.help == null && viewInfoRules.value.rules"
    >
      Владелец магазина пока не заполнил данную информацию.
    </div>
    <div class="q-py-md">
      <div class="text-h6">Помощь</div>
      <div class="">{{ viewInfoRules.value.help }}</div>
    </div>
    <div class="q-py-md">
      <div class="text-h6">Правила</div>
      <div class="">{{ viewInfoRules.value.rules }}</div>
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
    ...mapGetters(["viewInfoRules"]),
  },
  methods: {
    ...mapActions(["actionsWithInfo"]),
  },
  mounted() {
    this.actionsWithInfo({
      action: "shop/info",
    });
  },
});
</script>
