<template>
  <q-card class="q-ma-sm">
    <div class="bg-primary flex flex-center q-pa-sm">
      <div class="column flex-center">
        <q-avatar
          size="56px"
          font-size="40px"
          color="transparent"
          text-color="white"
          icon="image"
        />
        <div class="text-caption text-wight-bold text-white">Категория</div>
        <div class="text-h6 text-white">{{ product.design.title }}</div>
      </div>
    </div>
  </q-card>
</template>
<script>
export default {
  props: ["product"],
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>