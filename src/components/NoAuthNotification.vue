<template>
  <div class="flex flex-center">
    <div class="column q-gutter-sm">
      <div class="col-10 col-sm-6 col-md-4 q-pa-md">
        <q-banner class="bg-brand" rounded>
          Чтобы совершать совешать покупки необходимо авторизироваться.
        </q-banner>
      </div>
      <div class="col-10 col-sm-6 col-md-4 q-pa-md">
        <q-btn
          dense
          color="orange"
          class="fit"
          label="Войти"
          @click="changeDialogs('auth')"
        />
      </div>
    </div>
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