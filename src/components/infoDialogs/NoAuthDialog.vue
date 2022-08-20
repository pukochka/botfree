<template>
  <q-dialog v-model="viewDialogs.auth" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <component
          async
          :is="'script'"
          src="https://telegram.org/js/telegram-widget.js?19"
          data-telegram-login="SHOPCARTBOTTBOT"
          data-size="large"
          :data-auth-url="window.location.origin"
          data-radius="4"
          data-request-access="write"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Отмена"
          color="secondary"
          no-caps
          no-wrap
          @click="changeDialogs('auth')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewDialogs: "user/viewDialogs" }),
  },
  methods: {
    ...mapMutations({ changeDialogs: "user/changeDialogs" }),
  },
};
</script>