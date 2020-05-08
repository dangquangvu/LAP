<template>
  <v-container fluid>
    <template v-if="quizz">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" class="offset-md-1 offset-lg-1">
          <navLearn :counter="counter"></navLearn>
        </v-col>
        <v-col cols="12" sm="9" md="7" lg="6">
          <!-- <template v-if="quiz"> -->
          <quizCard
            :quizAns="quizz"
            @changeCouterTrueChild="changeCouterTrue"
            @changeCouterFalseChild="changeCouterfalse"
            @reset = "reset"
          ></quizCard>
          <!-- </template> -->
        </v-col>
      </v-row></template
    >
  </v-container>
</template>

<script>
import navLearn from "../components/leanCard/navLearnDetail";
import quizCard from "../components/leanCard/quizCard";
import quiz from "../controller/quiz";
// import cardService from "../controller/cardService";
export default {
  data() {
    return {
      counter: {
        total: 10,
        remember: 0,
        forget: 0,
        id: null,
      },
      quizz: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.generateQuiz();
  },
  methods: {
    generateQuiz() {
      if (!this.$store.state.quiz.quiz) {
        let check = this.isEmpty(this.$store.state.cardPool.showCardPool);
        if (!check) {
          let data = quiz.randomQuiz(
            this.$store.state.cardPool.showCardPool.arrPool
          );
          this.$store.dispatch("quiz/assginQuizAct", data);
          this.quizz = data;
          this.counter.total = this.quizz.length;
        }
        if (check) {
          quiz.generationQuiz(this.id).then((data) => {
            this.$store.dispatch("quiz/assginQuizAct", data.message);
            this.quizz = data.message;
            this.counter.total = this.quizz.length;
          });
        }
      } else {
        this.quizz = this.$store.state.quiz.quiz;
        this.counter.total = this.quizz.length;
      }
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.prototype.hasOwnProperty.call(key)) return false;
      }
      return true;
    },
    changeCouterTrue() {
      this.counter.remember += 1;
      this.counter.total -= 1;
      console.log("correct");
      return;
    },
    changeCouterfalse() {
      this.counter.forget += 1;
      this.counter.total -= 1;
      console.log("incorrect");
      return;
    },
    reset(){
      this.counter.total = this.quizz.length;
      this.counter.forget = 0;
      this.counter.remember = 0;
    }
  },
  components: {
    navLearn,
    quizCard,
  },
};
</script>

<style scoped>
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
  font-size: 35px;
  font-weight: 700;
}
.subtext--show {
  font-size: 15px;
  font-weight: 700;
}
</style>
