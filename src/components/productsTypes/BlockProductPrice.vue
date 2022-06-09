<template>
  <q-card-actions vertical align="left">
    <q-btn
      color="teal"
      dense
      outline
      rounded
      padding="4px 16px"
      :label="prod.price.amount + ' ' + prod.price.currency"
    />
  </q-card-actions>
</template>
<script>
import { ref } from "vue";
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["prod"],
  setup() {},
  methods: {
    ...mapActions(["viewChosenCategory"]),
  },
};
</script>