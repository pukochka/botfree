<template>
  <q-page class="flex justify-center items-start bg-white">
    <q-dialog
      no-route-dismiss
      v-model="viewInitLoading"
      persistent
      maximized
      transition-show="none"
      transition-hide="none"
    >
      <q-card class="flex flex-center">
        <div class="column flex-center">
          <q-spinner color="primary" size="3em" :thickness="10" />
          <div class="">Пожалуйста, подождите...</div>
        </div>
      </q-card>
    </q-dialog>
    <div class="q-pa-md">
      <div class="text-h4 text-center">Авторизация</div>
      <q-card class="q-ma-md q-pa-sm card-auth">
        <q-card-section>
          <div class="q-pb-sm">Ваш код</div>
          <q-input
            style="width: 300px"
            v-model="code"
            color="teal"
            type="text"
            outlined
            dense
            hint="Для авторизации введите код полученный в телеграмме"
            :rules="[
              (val) => val.length <= 3 || 'Можно ввести не более 3 символов',
              (val) => val.length >= 1 || 'Можно ввести не менее 1 символа',
            ]"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            class="full-width"
            color="teal"
            padding="8px 0px"
            label="Войти"
            to="/auth"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

import validate from "src/telegram/index";
import "url-search-params-polyfill";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      dialCode: ref(false),
      code: ref(""),
    };
  },
  computed: {
    ...mapGetters(["viewUserValid", "viewInitData", "viewInitLoading"]),
  },
  methods: {
    ...mapActions(["getUserData"]),
    ...mapMutations(["changeValidator", "changeInitData", "changeInitLoading"]),

    convertURL(search) {
      if (search == "") {
        return false;
      } else {
        let result = {};
        for (const [key, value] of new URLSearchParams(search)) {
          result[key] = value;
        }
        return result;
      }
    },
  },
  mounted() {
    this.changeValidator(
      validate(
        this.convertURL(window.Telegram.WebApp.initData),
        this.convertURL(window.location.search)
      )
    );
    this.changeInitData({
      data: this.convertURL(window.Telegram.WebApp.initData),
      search: this.convertURL(window.location.search),
    });
  },
  watch: {
    viewInitData() {
      if (
        this.viewUserValid &&
        this.viewInitData.data != "" &&
        this.viewInitData.search != ""
      ) {
        this.$router.push("/auth");
        this.changeInitLoading(false);
      } else {
        setTimeout(() => this.changeInitLoading(false), 2000);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
</style>