<template>
  <div class="fit active relative-position">
    <div class="active-drop fit absolute-center"></div>
    <div
      class="bg-primary flex flex-center q-pa-sm q-py-lg rounded-borders column"
    >
      <div class="text-center">
        <div class="text-caption text-wight-bold text-white">Категория</div>
      </div>
      <div class="flex flex-center">
        <div class="text-h6 text-white text-center">
          {{ product.design.title }}
        </div>
      </div>
    </div>
  </div>
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
  background: rgba(255, 255, 255, 0.2);
}
.avatar {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>