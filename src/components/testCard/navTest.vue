<template>
  <v-card class="score--zone" outlined>
    <v-list>
      <v-list-item-group>
        <v-list-item disabled class="liner">
          <v-list-item-icon
            class="mr-1"
            :class="{
              'ml-12': $vuetify.breakpoint.lgAndUp,
              'ml-11': $vuetify.breakpoint.md,
              'ml-5': $vuetify.breakpoint.sm,
            }"
          >
            <ion-icon
              name="document-text-outline"
              class="pr-2 text--grey icon--show--learn"
            ></ion-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text--show">Kiểm Tra</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-col
          cols="12"
          style="overflow-y: scroll;"
          min-height="100px"
          max-height="250px"
        >
          <v-card
            class="d-flex flex-wrap text-center justify-center"
            color="grey lighten-2"
            flat
            tile
            width="100vw"
          >
            <v-card
              v-for="(item, index) in quizz"
              :key="index"
              class="pa-3 m1 px-0 "
              outlined
              tile
              max-width="165px"
              min-width="50px"
              min-height="55px"
              style="cursor: pointer"
              @click="questionFocus(item.id_parent+1)"
              :class="{'color' : quizz[index].id_choose != null }"
            >
              {{ index + 1 }}
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" style="height: 40px;">
          <v-card
            class="d-flex flex-wrap text-center justify-center p2"
            color=""
            flat
            tile
          >
            CountDown :{{ time }}
            <!-- <v-card min-height="35px"
            min-width="50px">
            </v-card> -->
          </v-card>
        </v-col>
        <v-col cols="12" style="" min-height="70px">
          <v-card
            class="d-flex flex-wrap text-center justify-center p2"
            color=""
            flat
            tile
          >
            <v-card-title>
              Last score :{{last_score}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-list-item-group>
      <div style=""></div>
      <v-spacer></v-spacer>
      <v-card-title class="tick">
        <img
          src="../../../public/icons8-settings-64.png"
          style="padding: 0px 5px;width:35px;"
        />
        tùy chọn
      </v-card-title>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["length","quizBackbone"],
  data() {
    return {
      quizz: null,
      // length: 10,
      time: "",
      last_score : 10
    };
  },
  methods: {
    timer() {
      let countDownDate = new Date("May 10, 2020 14:17:00").getTime();
      const self = this;
      let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        self.time = hours + ":" + minutes + ":" + seconds;
        console.log(hours + ":" + minutes + ":" + seconds);
        if (distance < 0) {
          clearInterval(x);
          self.time = "EXPIRED";
        }
      }, 1000);
    },
    questionFocus(value){
        this.$emit("changeForcus", value);
        console.log(value)
    },

  },
  mounted() {
    this.timer();
    this.quizz = this.quizBackbone
  },
  watch: {
    quizBackbone(oldVal,newVal){
      if(oldVal != newVal){
        this.quizz = this.quizBackbone
      }
    }
  },
};
</script>

<style>
.score--zone {
  min-height: 500px;
}
.liner {
  align-content: center;
  justify-content: center !important;
  border-bottom: 1px solid #cacaca !important;
}
.icon--show {
  font-size: 35px;
  color: #99ceff;
  fill: #4257b2;
}
.icon--show--learn {
  font-size: 35px;
  color: #4257b2;
  fill: #4257b2;
}
.text--forget {
  color: #ff725b;
}
.text--remember {
  color: #23b26d;
}
.text--show {
  font-size: 20px;
  color: grey;
}
.show {
  align-content: center;
  text-align: center;
}
.number--show {
  font-size: 35px !important;
  font-weight: 700 !important;
}
.subtext--show {
  font-size: 15px !important;
  font-weight: 700 !important;
}
.tick {
  border: 0.125rem solid #3ccfcf;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.625;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  transition-property: border-color;
  width: 80%;
  margin: auto;
  padding: 5px !important;
}
.color{
    background-color: #a8d2f3!important;
}
</style>
