<template>
  <q-layout view="hHr lpR fFf">
    <q-header bordered class="text-teal-7 flex items-center bg-grey-2">
      <q-toolbar>
        <q-toolbar-title class="q-gutter-md">
          <q-avatar size="50px" font-size="20px" rounded color="brand">
            <div class="fit q-ma-xs">
              <div class="main_logo fit"></div>
            </div>
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.button {
  text-transform: none;
  height: 100%;
  &.route {
    flex-grow: 1;
    &.mobile {
      font-size: 12px;
    }
  }
}
.main_logo {
  background-image: url("src/layouts/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>