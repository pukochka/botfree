<template>
  <div class="absolute-bottom q-mx-sm q-my-sm">
    <q-btn
      label="Купить"
      color="secondary"
      text-color="primary"
      class="fit"
      padding="5px 0"
      :loading="viewDigital.loading.create"
      @click="GetDigitalData({ action: 'create', category_id: product.id })"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({ viewDigital: "digital/viewDigital" }),
  },
  methods: {
    ...mapActions({ GetDigitalData: "digital/GetDigitalData" }),
    ...mapMutations({
      changeTab: "user/changeUserTab",
      changeDigitalSelect: "digital/changeDigitalSelect",
    }),
  },
});
</script>