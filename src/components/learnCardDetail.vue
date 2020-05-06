<template>
  <v-container fluid>
    <template v-if="quizz">
      <v-row>
      <v-col cols="12" sm="3" md="3" lg="2" class="offset-md-1 offset-lg-1">
        <navLearn></navLearn>
      </v-col>
      <v-col cols="12" sm="9" md="7" lg="6" >
        <!-- <template v-if="quiz"> -->
          <quizCard :quizAns="quizz"></quizCard>
        <!-- </template> -->
      </v-col>
    </v-row></template>  
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
        remember: 1,
        forget: 9,
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
          // console.log("aaaa", this.quizz);
        }
        if (check) {
          console.log(this.id, "iddddddddd");
          quiz.generationQuiz(this.id).then((data) => {
            // console.log(data.message);
            this.$store.dispatch("quiz/assginQuizAct", data.message);
            this.quizz = data.message;
            // console.log(this.quizz, "xxxxxxx");
          });
        }
      }
      else {
        this.quizz = this.$store.state.quiz.quiz;
        // console.log(this.quizz,"eelllllsssseeee");
      }
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.prototype.hasOwnProperty.call(key)) return false;
      }
      return true;
    },
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
