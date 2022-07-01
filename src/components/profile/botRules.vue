<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Правила магазина</div>
    <q-separator class="q-mt-sm" />
    <div class="flex flex-center q-pa-xl" v-if="viewInfoRules.loading">
      <q-spinner color="primary" size="3rem" />
    </div>
    <div class="q-pa-md text-h6" v-if="viewInfoRules.help == null">
      Владелец магазина пока не заполнил данную информацию
    </div>
    <div class="">
      {{ viewInfoRules.help }}
    </div>
    <div class="">
      {{ viewInfoRules.rules }}
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
