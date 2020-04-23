<template>
  <v-container fluid class="grey  lighten-5">
    <v-row>
      <v-col xs="12" sm="12" md="10" lg="10"
      class ="offset-md-2 offset-lg-2">
        <v-row style="justify:center">
          <v-col xs="12" sm="8" md="8" lg="6" cols="12">
            <v-card-title class="text--grey">
              <h1>abc</h1>
            </v-card-title>
            <vue-flashcard
              footerFront=""
              footerBack=""
              headerFront=""
              headerBack=""
              textSizeFront="20px"
              textSizeBack="20px"
              colorTextBack="black"
              colorTextFront="white"
              colorFront="gray"
              colorBack="white"
              front="hello this is a flashcard"
              back="with animation"
            >
            </vue-flashcard>
          </v-col>
          <v-col xs="12" sm="4" md="4" lg="6" cols="12">
            <v-row :class="{ height: $vuetify.breakpoint.smAndUp }"> </v-row>
            <v-card-title style="color: gray">
              học
            </v-card-title>
            <v-row>
              <v-col xs="12" sm="12" cols="12" class="pl-8">
                <ion-icon
                  name="layers-outline"
                  style="font-size: 25px;color: #4257b2;
    fill: #4257b2;"
                  class="pr-2 text--grey"
                ></ion-icon>
                Thẻ ghi nhớ</v-col
              >
              <v-col xs="12" sm="12" cols="12" class="pl-8">
                <ion-icon
                  name="book-outline"
                  style="font-size: 25px;color: #4257b2;
    fill: #4257b2;"
                  class="pr-2 text--grey"
                ></ion-icon>
                Học</v-col
              >
              <v-col xs="12" sm="12" cols="12" class="pl-8">
                <ion-icon
                  name="document-text-outline"
                  style="font-size: 25px;color: #4257b2;
    fill: #4257b2;"
                  class="pr-2"
                ></ion-icon
                ><span class="mb-12 text--grey">Kiểm tra</span></v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div v-for="n in 6" :key="n" class="grey lighten-5">
      <v-col xs="12" sm="12" md="10" lg="8"  class ="offset-md-1 offset-lg-1">
        <cardInfor></cardInfor>
      </v-col>
    </div>
  </v-container>
</template>
// <ion-icon name="star"></ion-icon>
<script>
import vueFlashcard from "../leanCard/flashcard";
import cardInfor from "../ContentFolder/card/cardInfor";
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
  components: { vueFlashcard, cardInfor },
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
