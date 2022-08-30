<template>
  <div class="fit active relative-position">
    <div class="active-drop fit absolute-center rounded-borders"></div>
    <div
      class="bg-primary rounded-borders"
      :class="{ 'flex flex-center': !product.design.image }"
    >
      <q-avatar
        size="56px"
        font-size="40px"
        color="transparent"
        text-color="secondary"
        icon="image"
        v-if="!product.design.image"
      />
      <div
        class="img"
        :style="{
          'background-image': `url(${product.design.image})`,
        }"
      ></div>
    </div>
    <div class="bg-primary borders-bottom q-pl-sm">
      <div class="text-h6 text-secondary text-weight-medium">
        {{ product.design.title }}
      </div>
      <div
        class="text-caption text-secondary q-pb-sm"
        v-if="product.design.rules != ''"
      >
        {{ product.design.rules }}
      </div>
    </div>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
  props: ["product"],
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
    };
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
.img {
  min-height: 130px;
  max-height: 130px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 4px;
}
.borders-bottom {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>