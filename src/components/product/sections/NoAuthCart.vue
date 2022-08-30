<template>
  <div class="absolute-bottom q-mx-sm q-my-sm">
    <q-btn
      label="В корзину"
      color="secondary"
      text-color="primary"
      class="fit"
      padding="5px 0"
      @click="changeDialogs('auth')"
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
  methods: {
    ...mapMutations({ changeDialogs: "user/changeDialogs" }),
  },
});
</script>