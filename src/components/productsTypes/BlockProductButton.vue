<template>
  <q-btn
    :flat="!hasBasketItem()"
    icon="shopping_cart"
    :outline="hasBasketItem()"
    :color="hasBasketItem() ? 'teal-8' : 'grey-8'"
    @click="addOrRemoveInBasket(prod)"
  >
    <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal">{{
      hasBasketItem() ? "Удалить из корзины" : "Добавить в корзину"
    }}</q-tooltip>
  </q-btn>
  <q-btn flat icon="info" color="grey-8">
    <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal"
      >Информация</q-tooltip
    >
  </q-btn>
  <q-btn flat icon="paid" color="grey-8">
    <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal"
      >Купить</q-tooltip
    >
  </q-btn>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: ["prod"],
  setup() {},

  methods: {
    ...mapMutations(["addOrRemoveInBasket"]),
    ...mapGetters(["viewBasket"]),
    hasBasketItem() {
      if (this.viewBasket().find((item) => item == this.prod)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
