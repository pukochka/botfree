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
      <div class="column">
        <div class="text-h6 word">
          Get параметры : <span class="bg-red">{{ url }}</span>
        </div>
        <div class="text-h6 word">
          tg id : <span class="bg-red">{{ tg_id }}</span>
        </div>
        <div class="text-h6 word">
          Проверка : <span class="bg-red">{{ valid }}</span>
        </div>
        <div class="text-h6 word">
          Search : <span class="bg-red">{{ arr }}</span>
        </div>
      </div>

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

import validate from "src/telegram/index";

const tg = window.Telegram.WebApp;
export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      dialCode: ref(false),
      code: ref(""),
      url: ref(window.location.search),
      tg_id: ref(0),
      valid: ref(false),
      arr: ref([]),
    };
  },
  methods: {
    ...mapActions(["rnd"]),
    ...mapMutations(["increment"]),
    convertToArr(str) {
      if (str == "") {
        return [];
      } else {
        let arr = [];
        let check = "";
        [...str].forEach((el, index) => {
          if (el == "&" || el == "?" || index == str.length - 1) {
            arr.push(check);
            check = "";
          } else {
            check += el;
          }
        });
        arr.shift();
        arr.forEach((el, arrindex) => {
          let mes = true;
          let objval = "";
          let objkey = "";
          [...el].forEach((letter, index) => {
            if (letter == "=") {
              mes = false;
            } else if (index == el.length - 1) {
              arr[arrindex] = this.createObj(objkey, objval);
            } else {
              if (mes) {
                objkey += letter;
              } else {
                objval += letter;
              }
            }
          });
        });
        return arr;
      }
    },
    createObj(key, value) {
      let obj = {};
      obj[key] = value;
      return obj;
    },
  },
  computed: mapGetters(["show"]),
  mounted() {
    this.convertToArr("?sec=1111111112231231231242434&bot=399393");
    this.arr = this.convertToArr(window.location.search);
    tg.initData != ""
      ? (this.tg_id = JSON.parse(tg.initData))
      : (this.tg_id = 0);
    this.valid = validate(
      tg.initData,
      this.convertToArr(window.location.search)
    );
  },
  unmounted() {},
  watch: {},
});
</script>
<style lang="scss" scoped>
.header {
  max-width: 500px;
}
.word {
  max-width: 200px;
  word-break: break-all;
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