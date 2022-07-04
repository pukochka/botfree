<template>
  <div class="">
    <div class="text-h5">Ввести купон</div>
    <q-spinner color="primary" size="3em" />
    <q-btn
      flat
      color="green-8"
      icon="check"
      label="У вас уже есть купон"
      no-wrap
    />
    <q-btn flat color="red-8" icon="clear" label="Убрать купон" no-wrap />
    <!-- @click="actionsWithCoupon({action:'deactivated'})" -->
    <div class="">
      <q-input
        v-model="coupon"
        type="text"
        label="Ввести купон"
        dense
        borderless
        outlined
      />
      <q-btn color="primary" label="Отправить" />
      <!-- @click="actionsWithCoupon({action:'activate',code:coupon})" -->
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
    ...mapGetters(["ViewCoupon"]),
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