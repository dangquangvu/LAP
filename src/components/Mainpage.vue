<template>
  <v-container fluid>
    <bufferRoot />
    <v-row v-if="arrShowLoading">
      <template v-for="(n, i) in arrShow">
        <v-col :key="i" sm="6" md="4" cols="12">
          <cardRoot :card="n" @click="doanything()"></cardRoot>
        </v-col>
      </template>
    </v-row>
    <KK />
    <carousel></carousel>
  </v-container>
</template>
<script>
import bufferRoot from "../components/ContentFolder/buffer/buffer_root";
import KK from "../components/ContentFolder/buffer/khuyenKhich";
// import cardRoot from "../components/ContentFolder/card/card_root";
import carousel from "../components/ContentFolder/slick/carousel";
import cardService from "../controller/cardService";
const user = JSON.parse(localStorage.getItem("user"));
export default {
  data() {
    return {
      arrShow: [],
      arrShowLoading: false,
    };
  },
  created() {
    // this.$store.dispatch("cardFolder/getAllCardFolder");
  },
  mounted() {
    this.getdataStore();
  },
  methods: {
    async getdataStore() {
      if(this.$store.state.cardFolder.arrShow[0].author_id == '' ){
        let data= await cardService
        .getAllCardFolder(user.user._id)
        console.log(data)
        this.arrShow = data.message;
        this.arrShowLoading = true;
        this.$store.dispatch("cardFolder/submit",data.message)
      }else {
        this.arrShow = this.$store.state.cardFolder.arrShow;
        this.arrShowLoading = true;
      }
    },doanything(){
      console.log('hello')
    }
  },
  components: {
    carousel,
    cardRoot: () => import("../components/ContentFolder/card/card_root"),
    KK,
    bufferRoot,
  },
};
</script>

<style scoped></style>
//: () => import("../components/ContentFolder/card/card_root")
