<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
export default defineComponent({
  name: "App",
  methods: {
    ...mapMutations({ changeUserProp: "user/changeUserProp" }),
  },
  created() {
    this.changeUserProp({ section: "bot_config", value: window.BOTCONFIG });
  },
});
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700;800&display=swap");

body {
  font-family: "Open Sans", sans-serif !important;
}
</style>
