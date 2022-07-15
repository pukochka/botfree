<template>
  <div class="">
    <q-btn
      flat
      color="primary"
      icon="chevron_left"
      label="Выбрать другой способ доставки"
      no-caps
      no-wrap
      dense
      @click="
        changeSelectDelivery({
          delivery: [],
          page: 'all',
        })
      "
    />

    <div class="q-py-sm">
      <div class="" v-for="(options, index) of delivery[0]?.items" :key="index">
        <TypeDeliveryInterview v-if="options.type == 3" :option="options" />
        <TypeDeliveryFile v-if="options.type == 2" :option="options" />
        <TypeDeliveryMessage v-if="options.type == 1" :option="options" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import TypeDeliveryInterview from "src/components/form/optionsTypeDelivery/TypeInterview.vue";
import TypeDeliveryFile from "src/components/form/optionsTypeDelivery/TypeFile.vue";
import TypeDeliveryMessage from "src/components/form/optionsTypeDelivery/TypeMessage.vue";
export default defineComponent({
  props: ["delivery"],
  components: {
    TypeDeliveryInterview,
    TypeDeliveryFile,
    TypeDeliveryMessage,
  },
  setup() {
    return {};
  },
  methods: {
    ...mapMutations(["changeSelectDelivery"]),
  },
});
</script>
<style lang="scss" scoped>
</style>