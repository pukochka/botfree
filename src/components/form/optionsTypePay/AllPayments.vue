<template>
  <div class="flex flex-center min-h-sm" v-if="viewPayments.loading">
    <q-spinner color="primary" size="3rem" />
  </div>
  <div class="row q-col-gutter-sm" v-if="!viewPayments.loading">
    <div
      class="col-12"
      v-for="(payment, index) of viewPayments.data"
      :key="index"
    >
      <q-btn align="left" outline color="primary" class="fit q-pa-sm" no-caps>
        <q-avatar
          size="60px"
          font-size="22px"
          color="primary"
          text-color="white"
          icon="image"
        />
        <div class="text-subtitle1 q-ml-md text-grey-9">
          {{ payment.title }}
        </div>
      </q-btn>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({
      viewPayments: "form/viewPayments",
    }),
  },
});
</script>
<style lang="scss" scoped>
.outline {
  outline: solid 2px $primary;
}
.min {
  min-height: 300px;
}
</style>