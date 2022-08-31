<template>
  <div class="absolute-bottom q-mx-sm q-my-sm">
    <q-btn
      label="Купить"
      color="secondary"
      text-color="primary"
      class="fit"
      padding="5px 0"
      v-if="viewSelectTab === 'all'"
      @click="changeSelectProduct(product)"
    />
    <q-btn
      v-else
      label="Купить"
      color="secondary"
      text-color="primary"
      class="fit"
      padding="5px 0"
      :loading="viewDigital.loading.create && select === product.id"
      @click="
        GetDigitalData({
          action: 'create',
          category_id: product.id,
          count: viewDigital.count,
        });
        select = product.id;
      "
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {
      select: ref(-1),
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      viewDigital: "digital/viewDigital",
      viewSelectTab: "select/viewSelectTab",
    }),
  },
  methods: {
    ...mapActions({ GetDigitalData: "digital/GetDigitalData" }),
    ...mapMutations({
      changeTab: "user/changeUserTab",
      changeDigitalSelect: "digital/changeDigitalSelect",
      changeSelectProduct: "select/changeSelectProduct",
    }),
  },
});
</script>