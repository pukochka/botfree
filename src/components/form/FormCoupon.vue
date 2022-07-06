<template>
  <div class="max-md">
    <div class="text-h5 q-pb-md" v-if="!viewCoupon.loading">Ввести купон</div>
    <div class="flex flex-center q-pa-md" v-if="viewCoupon.loading">
      <q-spinner color="primary" size="3em" />
    </div>
    <div class="q-pa-sm row">
      <q-btn
        flat
        color="green-8"
        icon="check"
        label="У вас уже есть купон"
        no-wrap
        v-if="!viewCoupon.loading && viewCoupon.has"
      />
      <q-btn
        color="red-8"
        icon="clear"
        label="Убрать купон"
        no-wrap
        v-if="!viewCoupon.loading && viewCoupon.has"
      />
      <!-- @click="actionsWithCoupon({action:'deactivated'})" -->
    </div>

    <div class="" v-if="!viewCoupon.loading && !viewCoupon.has">
      <q-input
        v-model="coupon"
        type="text"
        label="Ввести купон"
        dense
        borderless
        outlined
      />
      <div class="flex flex-center q-pa-md">
        <q-btn
          color="primary"
          label="Активировать"
          :loading="viewCoupon.loading"
        />
        <!-- @click="actionsWithCoupon({action:'activate',code:coupon})" -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {
      coupon: ref(""),
    };
  },
  computed: {
    ...mapGetters(["viewCoupon"]),
  },
  methods: {
    ...mapActions(["actionsWithCoupon"]),
  },
  mounted() {
    // this.actionsWithCoupon({action:'find-active'})
  },
});
</script>
<style lang="scss" scoped>
</style>