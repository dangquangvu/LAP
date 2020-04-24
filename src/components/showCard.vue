<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12" sm="12" md="10" lg="10" class="offset-md-2 offset-lg-2">
        <v-row style="justify:center">
          <v-col xs="12" sm="8" md="8" lg="6" cols="12">
            <v-card-title class="text--grey">
              <h1>abc</h1>
            </v-card-title>
            <template v-if="number != -1">
              <div>aaaaa</div>
              <carousel
                :responsive="{
                  0: { items: 1 },
                }"
                :loop="true"
                :autoplay="false"
                :margin="2"
                :stagePadding="1"
                :autoplayHoverPause="false"
                :lazyLoad="true"
                v-if="arr.length != 0"
              >
                <!-- :dots = "" -->
                <template v-for="(n, i) in arr">
                  <flashCard :key="i" :front="n.text" :back="n.explain">
                  </flashCard>
                </template>
              </carousel>
            </template>
            <template v-else-if="number == -1">
              <div>b</div>
              <carousel
                :responsive="{
                  0: { items: 1 },
                }"
                :loop="true"
                :autoplay="false"
                :margin="2"
                :stagePadding="1"
                :autoplayHoverPause="false"
                :lazyLoad="true"
                v-if="arr.length == 0"
              >
                <!-- :dots = "" -->

                <flashCard :front="`...`" :back="`...`"> </flashCard>
              </carousel>
            </template>
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
                  style="font-size: 25px;color: #4257b2;fill: #4257b2;"
                  class="pr-2 text--grey"
                ></ion-icon>
                Thẻ ghi nhớ</v-col
              >
              <v-col xs="12" sm="12" cols="12" class="pl-8">
                <ion-icon
                  name="book-outline"
                  style="font-size: 25px;color: #4257b2;fill: #4257b2;"
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

    <div v-for="(n, i) in arr" :key="i" class="grey lighten-5">
      <v-col xs="12" sm="12" md="10" lg="8" class="offset-md-1 offset-lg-1">
        <cardInfor :card="n"></cardInfor>
      </v-col>
    </div>
  </v-container>
</template>
<script>
import carousel from "vue-owl-carousel";
import cardInfor from "../components/ContentFolder/card/cardInfor";
import cardService from "../controller/cardService";
import flashCard from "../components/leanCard/flashcard";
export default {
  data() {
    return {
      value: true,
      id: this.$route.params.id,
      arr: [],
      number: 0,
      text: {
        text: "aaa",
        back: "baaaa",
      },
    };
  },
  mounted() {
    this.getData();
  },
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
            this.number = data.message.length == 0 ? -1 : data.message.length;
            console.log(this.arr, this.number);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.arr = this.$store.state.cardPool.showCardPool.arrPool;
        this.number =
          this.$store.state.cardPool.showCardPool.arrPool.length == 0
            ? -1
            : this.$store.state.cardPool.showCardPool.arrPool.length;
        console.log(this.arr, this.number);
      }
    },
  },
  components: { cardInfor, flashCard, carousel },
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
