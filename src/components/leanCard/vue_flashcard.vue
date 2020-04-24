/* eslint-disable */
<template>
  <v-row>
    <v-col cols="12"> </v-col>
  </v-row>
</template>
<script>
import flashcard from "./flashcard";
import carousel from "vue-owl-carousel";
import cardService from "../../controller/cardService";
export default {
  props: ["value"],
  data() {
    return {
      data: {
        text: {
          textF: "a",
          explain: "b",
        },
        valueStore: [],
      },
    };
  },
  mounted() {},
  methods: {
    async getData() {
      if (!this.$store.state.cardPool.showCardPool.idFolder) {
        await cardService
          .getAllCardPool(this.id)
          .then((data) => {
            let value = {
              idFolder: this.id,
              arrPool: data.message,
            };
            this.$store.commit("cardPool/setShow", value);
            this.$store.dispatch("cardPool/addItemInArrAct", value);
            this.arr = data.message;
            console.log(this.arr);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.arr = this.$store.state.cardPool.showCardPool.arrPool;
        console.log(this.arr.arrPool);
      }
    },
  },
  components: {
    flashcard,
    carousel,
  },
};
</script>
<style lang="css" scoped></style>
