<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-sm">Подарки</div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      getGifts: "form/getGifts",
    }),
  },
  mounted() {
    this.getGifts({ order_id: 20896 });
  },
});
</script>
<style lang="scss" scoped>
</style>