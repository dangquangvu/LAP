<template>
  <v-card class="quiz--zone" outlined style="overflow-y: scroll;height: 40px">
    <template v-if="number && number <= length">
      <v-card-text class="quiz--text--zone">
        <span v-html="quiz[number - 1].item.text" class="text--show"></span>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col
            v-for="(n, i) in quiz[number - 1].arrAns"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            lg="3"
          >
            <div
              class="tick"
              @click="
                sendQues(i, quiz[number - 1].item.explain, n, quiz[number - 1])
              "
              role="button"
              :class="{
                'tick--true': choose == i,
                'tick--false': choose_false == i,
              }"
            >
              {{ n }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
    <template v-else-if="number > length">
      <v-card-text class="" style="text-align: center;">
        <span class="text--show" style="color : #155724;font-weight: 900;"
          >Kết quả</span
        >
      </v-card-text>
      <v-card-text>
          <v-card-title>Đúng</v-card-title>
        <v-row>
          <v-col cols="12" v-for="(n,i) in correct" :key="i">
            <cardShowResult :card="n"></cardShowResult>
          </v-col>
        </v-row>
          <v-card-title>Sai</v-card-title>
        <v-row>
          <v-col cols="12" v-for="(n,i) in incorrect" :key="i">
            <cardShowResult :card="n"></cardShowResult>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="text--show" style="text-align: center;">
              <button @click="returnLearn()">Học lại</button>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
import cardShowResult from "../ContentFolder/card/card_show_result";
export default {
  props: ["quizAns"],
  components: {
    cardShowResult,
  },
  data() {
    return {
      quiz: null,
      number: null,
      length: null,
      html: "",
      choose: null,
      choose_false: null,
      incorrect: [],
      correct: [],
    };
  },
  mounted() {
    if (this.quizAns) {
      this.quiz = this.quizAns;
      this.contruct();
    }
  },
  methods: {
    contruct() {
      this.number = 1;
      this.length = this.quiz.length;
    },
    sendQues(id, explain, value, arr) {
      let choose = value;
      let ques = explain;
      let text = arr.item.text;
      let object = {
        text: text,
        explain: explain,
        choose: value,
        arr: arr,
      };
      if (ques === choose) {
        this.choose = id;
        this.$emit("changeCouterTrueChild");
        this.correct.push(object);
        this.$store.commit("quiz/correct", object);
        setTimeout(
          function() {
            this.number = this.number + 1;
            this.choose = null;
          }.bind(this),
          500
        );
      } else {
        this.choose_false = id;
        this.$store.commit("quiz/incorrect", object);
        this.incorrect.push(object);
        this.$emit("changeCouterFalseChild");
        setTimeout(
          function() {
            this.number = this.number + 1;
            this.choose_false = null;
          }.bind(this),
          500
        );
      }
    },
    changeNumber() {
      this.number = this.number + 1;
    },
    returnLearn() {
      this.number = 1;
      this.correct =[];
      this.incorrect = [];
      this.$emit("reset");
    }
  },
};
</script>

<style scoped>
.quiz--zone {
  min-height: 500px;
}
.quiz--text--zone {
  min-height: 350px;
}
.text--show {
  font-size: 30px;
  color: #455358;
  font-weight: 400;
  line-height: 1;
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
.tick--true {
  background-color: #3ccfcf;
  border: 0.125rem solid #3ccfcf;
}
.tick--false {
  background-color: #ff725b;
  border: 0.125rem solid #ff725b;
}
</style>
// [ { text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", ans:
[{ text: "a" }, { text: "b" }, { text: "c" }, { text: "d" }], ques: { text: "b"
}, }, { text: "How can I make an element sticky using Vuetify?", ans: [{ text:
"a" }, { text: "b" }, { text: "c" }, { text: "d" }], ques: { text: "b" }, }, ]
