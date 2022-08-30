<template>
  <div class="">
    <q-tab-panels
      :class="themeColor"
      v-model="viewSelectTab"
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
    >
      <q-tab-panel name="all">
        <ViewCatalog />
      </q-tab-panel>
      <q-tab-panel name="select">
        <SelectProduct />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script>
import { ref, defineComponent, computed } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import SelectProduct from "src/components/catalog/SelectProduct.vue";
import ViewCatalog from "src/components/catalog/ViewCatalog.vue";

export default defineComponent({
  components: {
    SelectProduct,
    ViewCatalog,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({
      viewSelectTab: "select/viewSelectTab",
      viewUser: "user/viewUser",
    }),
    themeColor() {
      return this.viewUser.theme.is_dark ? "bg-dark" : "bg-white";
    },
  },
});
</script>