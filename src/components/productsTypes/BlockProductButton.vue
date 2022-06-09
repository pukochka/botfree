<template>
  <q-btn flat icon="shopping_cart" color="grey-8">
    <q-tooltip anchor="bottom middle" self="center middle" class="bg-teal"
      >Добавить в корзину</q-tooltip
    >
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

export default {
  setup() {},
};
</script>
