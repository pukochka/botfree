<template>
  <div class="row q-col-gutter-sm">
    <div
      class="col-12"
      v-for="(delivery, index) of viewDelivery.data"
      :key="index"
    >
      <div
        class="
          rounded-borders
          text-center
          q-pa-sm
          relative-position
          fit
          outline
          cursor-pointer
        "
        @click="
          changeSelectDelivery({
            delivery: delivery.feedback,
            page: 'selected',
          })
        "
      >
        <div class="text-subtitle2 text-weight-bold">{{ delivery.title }}</div>
        <q-separator color="primary" class="q-mt-xs q-mb-xs" />
        <div class="text-caption">
          {{ delivery.description }}
        </div>
        <div class="text-weight-bold">
          Стоимость <span class="text-primary">{{ delivery.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["viewDelivery"]),
  },
  methods: {
    ...mapActions(["actionsDelivery"]),
    ...mapMutations(["changeSelectDelivery"]),
  },
  mounted() {
    this.actionsDelivery({ action: "index" });
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 2px $primary solid;
}
</style>