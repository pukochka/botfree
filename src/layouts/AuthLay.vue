<template>
  <q-layout view="hHr lpR fFf">
    <q-header bordered class="text-teal-7 flex items-center bg-grey-2">
      <q-toolbar>
        <q-toolbar-title class="q-gutter-md">
          <q-avatar color="brand" size="50px" rounded>
            <div class="q-pa-xs fit">
              <img src="~assets/logo.png" alt="bott" />
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
    return {};
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
</style>