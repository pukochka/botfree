<template>
  <q-card class="fit active">
    <div class="active-drop fit absolute-center"></div>
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
.active {
  border-radius: 4px !important;
}
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.3);
}
</style>