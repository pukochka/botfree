<template>
  <div class="button-add fit">
    <q-btn
      label="В корзину"
      color="teal"
      class="fit"
      padding="5px 32px"
      v-if="!hasBasketItem()"
      @click="addInBasket(prod)"
    >
      <!-- <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal">{{
        hasBasketItem() ? "Удалить из корзины" : "Добавить в корзину"
      }}</q-tooltip> -->
    </q-btn>
    <div
      v-if="hasBasketItem()"
      class="
        flex
        no-wrap
        flex-center
        rounded-borders
        justify-between
        count
        text-h6
        fit
      "
    >
      <q-btn
        padding="4px"
        flat
        color="grey-9"
        icon="remove"
        @click="decreaseCountInBasket(prod)"
      />
      <div class="q-px-xs absolute-center">{{ countInBasket() }}</div>

      <q-btn
        padding="4px"
        flat
        color="grey-9"
        icon="add"
        v-show="countInBasket() < prod.setting.max_count"
        @click="increaseCountInBasket(prod)"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: ["prod"],
  setup() {},
  computed: {
    ...mapGetters(["viewBasket"]),
  },
  methods: {
    ...mapMutations([
      "addInBasket",
      "increaseCountInBasket",
      "decreaseCountInBasket",
    ]),

    hasBasketItem() {
      if (this.viewBasket.find((item) => item.data.id == this.prod.id)) {
        return true;
      } else {
        return false;
      }
    },
    countInBasket() {
      if (this.viewBasket.find((item) => item.data.id == this.prod.id)) {
        return this.viewBasket.find((item) => item.data.id == this.prod.id)
          .count;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.count {
  border: 2px solid #009688;
  min-width: 120px;
}
</style>