<template>
  <v-card class="" max-width="100vw" min-height="60px" outlined>
    <v-row class="" style="">
      <v-col
        cols="5"
        class="pl-5 text--size"
        style="border-right:1px solid grey"
      >
        <div class="text--size">a</div></v-col
      >
      <v-col cols="5" class="text--size">
        <div class="text--size">a</div></v-col
      >
      <v-col cols="2" class="text--size">
        <template v-if="value">
          <ion-icon
            name="star-outline"
            style="cursor: pointer;"
            @click="changeFavorite()"
          ></ion-icon>
        </template>
        <template v-if="!value">
          <ion-icon
            name="star"
            style="cursor: pointer ;color: red"
            @click="changeFavorite()"
          ></ion-icon>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    changeFavorite() {
      console.log("a");
      this.value = !this.value;
    },
  },
};
</script>

<style scoped>
.height {
  height: 60px;
}
.text--grey {
  color: #455358;
}
.text--yellow {
  color: yellow;
}
.text--size {
  font-size: 22px;
}
.text--red {
  color: red;
}
</style>
//style="min-height:350px;max-weight:550px" vue-flashcard
