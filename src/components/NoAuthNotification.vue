<template>
  <div class="max-xxl center">
    <q-banner class="bg-brand q-ma-md" rounded>
      <div class="text-subtitle2">
        Чтобы совершать совешать покупки необходимо авторизироваться.
      </div>
      <q-btn
        padding="4px 48px"
        class="q-mt-sm"
        color="secondary"
        label="Войти"
        @click="changeDialogs('auth')"
      />
    </q-banner>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    ...mapMutations({ changeDialogs: "user/changeDialogs" }),
  },
});
</script>