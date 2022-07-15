<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-md">Выберите способ оплаты</div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    ...mapActions(["getPayments"]),
  },
  mounted() {
    // this.getPayments({ action: "view" });
  },
});
</script>
<style lang="scss" scoped>
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
</style>