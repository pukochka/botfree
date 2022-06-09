<template>
  <q-badge
    class="end-dots bg-teal-3"
    v-for="(item, index) of items"
    :key="index"
    :label="item.design.title"
    v-show="index < 2"
  />
  <q-badge class="end-dots bg-teal-3" v-if="items.length > 2" label="..." />
  <q-badge
    class="end-dots"
    color="orange"
    v-if="items.length == 0"
    label="В категории нет товаров"
  />
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  setup() {},
};
</script>