<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="3" md="3" lg="2" class="offset-md-1 offset-lg-1">
        <navLearn></navLearn>
      </v-col>
      <v-col cols="12" sm="9" md="7" lg="6">
        <quizLearn></quizLearn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navLearn from "../components/leanCard/navLearnDetail";
import quizLearn from "../components/leanCard/quizCard";
import quiz from "../controller/quiz";
// import cardService from "../controller/cardService";
export default {
  data() {
    return {
      counter: {
        total: 10,
        remember: 1,
        forget: 9,
        id: null,
        quiz: null,
      },
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.generateQuiz();
  },
  methods: {
    async generateQuiz() {
      if (
        !this.$store.state.quiz.quiz &&
        this.$store.state.cardPool.showCardPool
      ) {
        console.log( this.$store.state.cardPool.showCardPool.arrPool)
        let data = quiz.randomQuiz(
          this.$store.state.cardPool.showCardPool.arrPool
        );
        this.$store.dispatch("quiz/assginQuizAct", data);
        this.quiz = data;
        console.log("aaaa", data);
      } else if (
        !this.$store.state.quiz.quiz &&
        !this.$store.state.showCardPool
      ) {
        console.log(this.id ,'iddddddddd')
        quiz.generationQuiz(this.id).then((data) => {
          console.log(data.message);
          this.$store.dispatch("quiz/assginQuizAct", data.message);
          this.quiz = data.message;
          console.log(this.quiz,'xxxxxxx');
        });
      } else if (this.$store.state.quiz.quiz) {
        this.quiz = this.$store.state.quiz.quiz;
        console.log(this.quiz);
      }
    },
  },
  components: {
    navLearn,
    quizLearn,
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
//
<v-row style="justify:center">
          <v-col xs="12" sm="8" md="8" lg="6" cols="12">
              
          </v-col>
        </v-row>
