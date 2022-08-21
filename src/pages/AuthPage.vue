<template>
  <div class="fullscreen flex flex-center">
    <q-spinner color="secondary" size="5rem" v-if="user.loading.auth" />
    <div
      class="text-h6 text-secondary text-center"
      v-if="user.error && !user.loading.auth"
    >
      Ошибка интернет соединения. Попробуйте перезагрузить страницу.
    </div>
    <div
      class="row q-gutter-md justify-center"
      v-if="!user.error && !user.loading.auth"
    >
      <div class="col-10 col-sm-6 col-md-4 text-h5">
        {{ user.bot_data.name }}
      </div>
      <div class="col-10 col-sm-6 col-md-4 text-overline">
        {{ user.bot_data.title }}
      </div>

      <div class="col-10 col-sm-6 col-md-4">
        <component
          async
          :is="'script'"
          src="https://telegram.org/js/telegram-widget.js?19"
          data-telegram-login="SHOPCARTBOTTBOT"
          :data-auth-url="localion + 'login'"
          data-size="large"
          data-radius="11"
          data-request-access="write"
        />
      </div>

      <q-btn
        class="col-10 col-sm-6 col-md-4"
        color="secondary"
        icon="person"
        label="Продолжить без входа"
        no-caps
        no-wrap
        @click="setStatus"
      />
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ user: "user/viewUser" }),
    localion() {
      return window.location.href;
    },
  },
  methods: {
    ...mapActions({ GetBotData: "user/GetDataByDomain" }),
    ...mapMutations({ setGuest: "user/SetGuest" }),
    setStatus() {
      this.setGuest(false);
      this.$router.push({ path: "/login" });
    },
  },
  created() {
    this.GetBotData();
  },
});
</script>
<style lang="scss" scoped>
</style>