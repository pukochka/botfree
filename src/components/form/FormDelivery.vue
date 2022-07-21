<template>
  <div class="max-md center">
    <div class="text-h5">Выберите способ доставки</div>
    <AllDelivelyes />
    <!-- <q-tab-panels
      v-model="viewDelivery.tab"
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-tab-panel name="all">
        
      </q-tab-panel>
      <q-tab-panel name="selected">
        <SelectDelivery :delivery="viewDelivery.select" />
      </q-tab-panel>
    </q-tab-panels> -->
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import AllDelivelyes from "src/components/form/optionsTypeDelivery/AllDelivelyes.vue";
// import SelectDelivery from "src/components/form/optionsTypeDelivery/SelectDelivery.vue";

export default defineComponent({
  components: {
    AllDelivelyes,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewDelivery: "form/viewDelivery" }),
  },
  methods: {},
  mounted() {},
});
</script>
<style lang="scss" scoped>
</style>