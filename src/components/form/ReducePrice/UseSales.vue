<template>
  <div class="text-h5 q-py-md text-secondary">Примененные скидки</div>
  <div class="row q-col-gutter-sm">
    <div
      class="col-12"
      v-for="(discount, index) of viewBasket.data.discounts"
      :key="index"
    >
      <div class="outline rounded-borders q-pa-sm">
        <div class="text-subtitle1 text-secondary text-center">
          {{ TagParser(discount.info) }}
        </div>
        <q-separator />
        <div class="text-subtitle2 text-center">
          {{ TagParser(discount.terms) }}
        </div>
      </div>
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
    ...mapGetters({ viewBasket: "basket/viewBasket" }),
  },
  methods: {
    TagParser(word) {
      let str = word;
      for (let tag of ["b", "i", "em", "small", "strong", "q", "s", "u"]) {
        let rgx = new RegExp(`<${tag}>`);
        str = str.replace(rgx, "");
        rgx = new RegExp(`</${tag}>`);
        str = str.replace(rgx, "");
      }
      return str;
    },
  },
  mounted() {},
});
</script>
<style lang="scss" scoped>
.outline {
  outline: 1px solid $secondary;
  border-radius: 4px;
}
.line {
  line-height: 14px;
}
</style>