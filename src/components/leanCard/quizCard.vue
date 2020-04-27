<template>
  <v-card class="quiz--zone" outlined>
    <template v-if="number && number <= length">
      <v-card-text class="quiz--text--zone">
        <span v-html="quiz[number - 1].text" class="text--show"></span>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col
            v-for="(n, i) in quiz[number - 1].ans"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            lg="3"
          >
            <div
              class="tick"
              @click="sendQues(i, quiz[number - 1], n)"
              role="button"
              :class="{
                'tick--true': choose == i,
                'tick--false': choose_false == i,
              }"
            >
              {{ n.text }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
    <template v-else-if="number > length">
      <v-card-text class="quiz--text--zone">
        <span>Quá Được</span>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3">
            <div>
              <button @click="returnLearn()">return</button>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
import Quiz from "../../controller/quiz";
export default {
  data() {
    return {
      quiz: [
        {
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          ans: [{ text: "a" }, { text: "b" }, { text: "c" }, { text: "d" }],
          ques: { text: "b" },
        },
        {
          text: "How can I make an element sticky using Vuetify?",
          ans: [{ text: "a" }, { text: "b" }, { text: "c" }, { text: "d" }],
          ques: { text: "b" },
        },
      ],
      number: null,
      length: null,
      html: "",
      choose: null,
      choose_false: null,
    };
  },
  mounted() {
    this.contruct();
    this.generationQuiz();
  },
  methods: {
    contruct() {
      this.number = 1;
      this.length = this.quiz.length;
      console.log(this.number, this.length);
    },
    sendQues(id, arr, value) {
      // console.log(id, value , arr);
      let choose = value.text;
      let ques = arr.ques.text;
      let result = arr.ans.filter((item) => item.text == ques);
      if (result[0].text === choose) {
        console.log(ques, result[0].text);
        this.choose = id;
        setTimeout(
          function() {
            this.number = this.number + 1;
            this.choose = null;
          }.bind(this),
          500
        );
      } else {
        this.choose_false = id;
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
    },
    generationQuiz() {
      Quiz.generationQuiz()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
