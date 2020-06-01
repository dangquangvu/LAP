<template>
  <v-container fluid>
    <template>
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" class="offset-md-1 offset-lg-1">
          <navTest :score ='score'></navTest>
        </v-col>
        <v-col cols="12" sm="9" md="7" lg="6" v-if="quiz">
          <mainTest :quiz="quiz"
          @sendResult="sendResult($event)"></mainTest>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import navTest from "../components/testCard/navTest";
import mainTest from "../components/testCard/mainTest";
import Test from "../controller/test";
import CardService from "../controller/cardService";
// const user = JSON.parse(localStorage.getItem("user"));
export default {
  data() {
    return {
      quiz: null,
      id: null,
      score : null
    };
  },
  mounted() {
    this.generateTest();
  },
  methods: {
    async generateTest() {
      this.id = this.$route.params.id;
      let adminFolder, data;
      try {
        adminFolder = await CardService.getInforCardFolder(this.id);
      } catch (error) {
        console.log(error);
      }

      let body = {
        authorId: adminFolder.message[0].author_id,
        author: adminFolder.message[0].author,
        title: adminFolder.message[0].title,
      };
      try {
        data = await Test.generationTest(body, this.id);
        this.quiz = data.message.arrTest;
        console.log(this.quiz);
      } catch (error) {
        console.log(error)
      }
    },
    sendResult(data){
      console.log(data)
      this.score = data;
    }
  },
  components: {
    navTest,
    mainTest,
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
