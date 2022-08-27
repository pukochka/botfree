<template>
  <div
    class="max-lg center q-mx-md"
    :style="{
      'min-height': width ? 'calc(100vh - 130px)' : 'calc(100vh - 51px)',
    }"
  >
    <q-btn
      color="secondary"
      flat
      icon="chevron_left"
      @click="changeTab('catalog')"
    />
    <div
      class="bg-primary rounded-borders q-my-md"
      :class="{ 'flex flex-center': !product.design.image }"
    >
      <q-avatar
        size="56px"
        font-size="40px"
        color="transparent"
        text-color="secondary"
        icon="image"
        v-if="!product.design.image"
      />
      <div
        class="img"
        :style="{ 'background-image': `url(${product.design.image})` }"
      ></div>
    </div>
    <div class="text-h6 q-mb-sm text-secondary">{{ product.design.title }}</div>
    <div class="text-subtitle1 q-mb-sm text-secondary">
      {{ product.design.rules }}
    </div>
    <div
      class="
        flex
        full-width
        justify-between
        items-center
        q-px-sm
        rounded-borders
      "
      v-if="!create"
      style="min-height: 50px"
    >
      <div class="text-weight-bold text-h6 text-secondary">
        {{ product.price.full }}
      </div>
      <q-btn
        padding="4px 32px"
        color="secondary"
        label="Купить"
        no-caps
        no-wrap
        :loading="viewDigital.loading.create"
        @click="create = !create"
      />
    </div>
    <DigitalOrder v-if="create" />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";

import DigitalOrder from "./DigitalOrder.vue";

export default defineComponent({
  components: {
    DigitalOrder,
  },
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
      create: ref(false),
    };
  },
  computed: {
    ...mapGetters({ viewDigital: "digital/viewDigital" }),
    product() {
      return this.viewDigital.select;
    },
  },
  methods: {
    ...mapActions({ createOrder: "digital/GetDigitalData" }),
    ...mapMutations({ changeTab: "user/changeUserTab" }),
  },
});
</script>
<style lang="scss" scoped>
.img {
  min-height: 200px;
  max-height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>