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

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      code: ref(""),
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
});
</script>
<style lang="scss" scoped>
</style>