<template>
  <q-page class="">
    <div class="container row q-pa-xl">
      <div class="header text-h3 non-selectable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        laudantium qui alias.
      </div>
      <div class="q-pa-xl flex flex-center avatar q-gutter-md">
        <q-avatar
          size="150px"
          rounded
          font-size="52px"
          color="teal"
          text-color="white"
          icon="done"
        />
        <q-avatar
          size="150px"
          rounded
          font-size="52px"
          color="teal"
          text-color="white"
          icon="star"
        />
        <q-avatar
          size="150px"
          rounded
          font-size="52px"
          color="teal"
          text-color="white"
          icon="person"
        />
      </div>
    </div>
    <div class="container q-pa-xl max-xl flex justify-end text-subtitle1">
      <div class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit
        nobis quia quo rerum vel veniam error, expedita, quidem maxime rem
        quisquam ex dolore magni veritatis aperiam quod, assumenda ad!
      </div>
    </div>
    <div class="container q-pa-xl column flex-center q-gutter-lg">
      <q-btn
        padding="16px 64px"
        label="Ввести код"
        class="bg-teal text-white"
        @click="dialCode = !dialCode"
      />
      <q-btn
        padding="16px 64px"
        label="Войти через Telegram"
        class="bg-teal text-white"
        @click="dialCode = !dialCode"
      />
      <q-btn
        padding="16px 64px"
        icon="add"
        class="bg-teal text-white"
        @click="rnd"
      />
    </div>
    <div class="">{{ show }}</div>
    <q-separator />
    <div class="footer q-pa-lg row justify-between">
      <q-btn
        flat
        dense
        color="teal"
        padding="4px 8px"
        label="Другая информация"
      />
      <div class="social q-gutter-md">
        <q-avatar size="30px" color="teal" text-color="white" />
        <q-avatar size="30px" color="blue-4" text-color="white" />
        <q-avatar size="30px" color="purple-4" text-color="white" />
      </div>
    </div>

    <q-dialog v-model="dialCode" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Код</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            color="teal"
            class="text-teal-6"
            dense
            v-model="code"
            autofocus
            @keyup.enter="dialCode = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn class="text-teal-6" flat label="Отмена" v-close-popup />
          <q-btn class="text-teal-6" flat label="Войти" to="/auth/user" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      dialCode: ref(false),
      code: ref(""),
    };
  },
  methods: {
    ...mapActions(["rnd"]),
    ...mapMutations(["increment"]),
  },
  computed: mapGetters(["show"]),
  mounted() {
    console.log(this.$store);
  },
});
</script>
<style lang="scss" scoped>
.header {
  max-width: 500px;
}
.avatar {
  flex-grow: 1;
}
@media (max-width: 599px) {
  .header {
    font-size: 36px;
    line-height: 1.2;
  }
}
@media (max-width: 450px) {
  .header {
    font-size: 28px;
    line-height: 1.2;
  }
  .footer {
    justify-content: center;
  }
}
</style>