<template>
  <v-card class="quiz--zone" outlined style="overflow-y: scroll;height: 40px">
    <template v-for="(item, index) in quiz">
      <v-card-text class="quiz--text--zone" :key="index">
        <span class="text--show">{{ index + 1 }}.{{ item.item.text }} </span>
        <v-card-text style="padding-bottom: 0px;">
          <v-row>
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="(n, i) in quiz[index].arrAns"
                :key="i"
                :label="`${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
          </v-row>
        </v-card-text>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
// import Quiz from "../../controller/quiz";
export default {
  props: ["quiz", "forcus", "quizBackbone"],
  components: {},
  data() {
    return {
      // quiz: null,
      number: null,
      length: null,
      html: "",
      choose: null,
      choose_false: null,
      incorrect: [],
      correct: [],
      quizAns: [],
    };
  },
  mounted() {
    if (this.quiz) {
      this.contruct();
    }
  },
  watch: {
    forcus() {
      if (this.forcus != null) {
        this.number = this.forcus;
      }
    },
    quizBackbone(oldval, newval) {
      if (oldval != newval) {
        this.quizAns = this.quizBackbone;
      }
    },
  },
  methods: {
    contruct() {
      this.number = 1;
      this.length = this.quiz.length;
      this.quizAns = this.quizBackbone;
      // console.log(this.quizAns);
      this.$store.dispatch("test/setQuizAct", this.quizAns);
      //sau này thêm id của bài kiểm tra, định vị bài kiểm tra trong localstorage
      // localStorage.setItem('test',this.quizAns);
    },
    sendQues(id, explain, value, arr, index_tick) {
      // console.log(id, explain, value, arr);
      let choose = value;
      let ques = explain;
      let text = arr.item.text;
      let object = {
        text: text,
        explain: explain,
        choose: value,
        arr: arr,
      };
      console.log(index_tick);
      // this.quizAns[index_tick].tick = value;
      // this.quizAns[index_tick].id_choose = id;
      // localStorage.setItem('test',this.quizAns);
      this.$emit("sendQues", { value: value, id: id, index_tick: index_tick });
      this.$store.dispatch("test/setQuizAct", this.quizAns);
      if (ques === choose) {
        this.choose = id;
        this.$emit("changeCouterTrueChild");
        this.correct.push(object);
      } else {
        this.choose_false = id;
        this.incorrect.push(object);
        this.$emit("changeCouterFalseChild");
      }
    },
    returnLearn() {
      this.number = 1;
      this.correct = [];
      this.incorrect = [];
      this.$emit("reset");
    },
    prev() {
      if (this.number > 1) {
        this.number = this.number - 1;
      }
    },
    next() {
      if (this.number <= this.length - 1) {
        this.number = this.number + 1;
      }
    },
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
