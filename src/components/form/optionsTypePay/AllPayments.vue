<template>
  <div class="flex flex-center min-h-sm" v-if="viewPayments.loading">
    <q-spinner color="primary" size="3rem" />
  </div>

  <q-list v-if="!viewPayments.loading" separator>
    <q-item
      tag="label"
      v-ripple
      v-for="(payment, index) of viewPayments.data"
      :key="index"
      @click="selectPayment(payment)"
    >
      <q-item-section avatar>
        <q-avatar
          size="40px"
          font-size="20px"
          color="teal"
          text-color="white"
          icon="image"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ payment.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {
      select: ref(false),
    };
  },
  computed: {
    ...mapGetters({
      viewPayments: "form/viewPayments",
    }),
  },
  methods: {
    ...mapActions({ getPayments: "form/getPayments" }),
    ...mapMutations({ changeFormSelect: "form/changeFormSelect" }),
    selectPayment({ id }) {
      // this.changeFormSelect({
      //   section: "payments",
      //   data: {},
      //   tab: "selected",
      // });
      // this.getPayments({
      //   action: "set-item",
      //   order_id: 21057,
      //   group_id: id,
      // });
    },
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