<template>
  <q-btn
    flat
    icon="visibility"
    color="grey-8"
    @click="viewChosenCategory(prod)"
  >
    <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal"
      >Посмотреть категорию</q-tooltip
    >
  </q-btn>
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