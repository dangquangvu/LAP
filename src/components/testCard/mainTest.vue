/* eslint-disable */
<template>
  <v-card class="quiz--zone" outlined style="overflow-y: scroll;height: 40px">
    <template v-if="!showResult">
      <template v-for="(item, index) in quizAns">
        <v-card-text class="quiz--text--zone" :key="index">
          <span class="text--show">{{ index + 1 }}.{{ item.item.text }} </span>
          <template>
            <v-card-text style="padding-bottom: 0px;">
              <v-row>
                <v-radio-group column>
                  <v-radio
                    v-for="(n, i) in quizAns[index].arrAns"
                    :key="i"
                    :label="`${n}`"
                    :value="n"
                    @change="valueCheck(index, n)"
                  ></v-radio>
                </v-radio-group>
              </v-row>
            </v-card-text>
          </template>
        </v-card-text>
      </template>
      <div class="my-2 mx-auto" >
          <v-btn color="primary" @click="sendResult()">click me!</v-btn>
        </div>
    </template>
    <template v-if="showResult">
      <v-row>
        <v-col cols="11" v-for="(n, i) in quizAns" :key="i">
          <showResultComponent :object="n" :id="i"></showResultComponent>
        </v-col>
      </v-row>
    </template>
    
  </v-card>
</template>

<script>
// import Quiz from "../../controller/quiz";
import showResultComponent from "../ContentFolder/card/card_show_test_result";
export default {
  props: ["quiz", "quizBackbone"],
  components: { showResultComponent },
  data() {
    return {
      quizAns: [],
      showResult: null,
    };
  },
  mounted() {
    if (this.quiz) {
      this.contruct();
    }
  },
  methods: {
    contruct() {
      this.number = 1;
      this.quizAns = this.quiz;
      // console.log(this.quizAns);
    },
    valueCheck(index, data) {
      this.quizAns[index].choose = data;
    },
    scoreResult(){
      console.log(this.quizAns);
      let correct =0;
      let length = this.quizAns.length;
      console.log(this.quizAns)
      this.quizAns.map((item)=>{
        console.log(item.item.explain ,item.choose)
        if(item.item.explain == item.choose){
          correct += 1;
        }
      })
      let score = parseFloat((correct/length)*10);
      console.log(score,correct,length)
      this.$emit('sendResult', score)
    },
    sendResult(){
      this.showResult = true;
      this.scoreResult();
    }
  },
};
</script>

<style scoped>
.quiz--zone {
  min-height: 500px;
}
.quiz--text--zone {
  min-height: 150px;
}
.text--show {
  font-size: 25px;
  color: #455358;
  font-weight: 400;
  line-height: 1;
  /* font-size: 1.1em; */
}
.tick {
  border: 0.125rem solid #3ccfcf;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  transition-property: border-color;
  width: 100%;
}
.tick:hover {
  border: 0.125rem solid #ffcd1f;
}

.tick--choose {
  background-color: #00acc1;
  border: 0.125rem solid #1e41d6;
  color: aliceblue;
}
</style>
