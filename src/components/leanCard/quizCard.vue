<template>
  <v-card class="quiz--zone" outlined>
    <v-card-text
      class="quiz--text--zone"
      
    >
      <span v-html="quiz.text" class="text--show "></span>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col v-for="(n,i) in quiz.ans" :key="i" cols="12" sm="6" md="3" lg="3">
          <div class="tick" role="button">
            {{ n.text }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      quiz: {
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus quisquam, explicabo eveniet cumque dolore reiciendis excepturi iste, in molestias odit voluptatem? Autem ipsum cupiditate ut beatae dolor provident. Excepturi.",
        ans: [{ text: "a" }, { text: "b" },{ text: "c" },{ text: "d" }],
        ques: { text: "b" },
      },
    };
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
.tick:hover{
    border: 0.125rem solid #ffcd1f;
}
</style>
