<template>
  <v-container fluid>
    <template>
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="2" class="offset-md-1 offset-lg-1">
          <navTest :length="length"></navTest>
        </v-col>
        <v-col cols="12" sm="9" md="7" lg="6">
          <mainTest :quiz="quiz"></mainTest>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import navTest from "../components/testCard/navTest";
import mainTest from "../components/testCard/mainTest";
export default {
  data() {
    return {
      quiz: [
        {
          item: {
            _id: "5ea480c8f139be2438237cdb",
            index: 1,
            text: "i",
            explain: "k",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.437Z",
            updatedAt: "2020-04-25T18:26:16.437Z",
            __v: 0,
          },
          arrAns: ["f", "s", "k", "d"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cda",
            index: 1,
            text: "g",
            explain: "h",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.427Z",
            updatedAt: "2020-04-25T18:26:16.427Z",
            __v: 0,
          },
          arrAns: ["s", "b", "h", "d"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cd9",
            index: 1,
            text: "e",
            explain: "f",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.424Z",
            updatedAt: "2020-04-25T18:26:16.424Z",
            __v: 0,
          },
          arrAns: ["m", "o", "f", "h"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cde",
            index: 1,
            text: "n",
            explain: "o",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.453Z",
            updatedAt: "2020-04-25T18:26:16.453Z",
            __v: 0,
          },
          arrAns: ["o", "d", "h", "f"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cdf",
            index: 1,
            text: "p",
            explain: "q",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.456Z",
            updatedAt: "2020-04-25T18:26:16.457Z",
            __v: 0,
          },
          arrAns: ["q", "s", "d", "h"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cdc",
            index: 1,
            text: "l",
            explain: "m",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.441Z",
            updatedAt: "2020-04-25T18:26:16.441Z",
            __v: 0,
          },
          arrAns: ["h", "b", "o", "m"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cd7",
            index: 1,
            text: "a",
            explain: "b",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.410Z",
            updatedAt: "2020-04-25T18:26:16.410Z",
            __v: 0,
          },
          arrAns: ["d", "b", "o", "q"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237ce0",
            index: 1,
            text: "r",
            explain: "s",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.459Z",
            updatedAt: "2020-04-25T18:26:16.459Z",
            __v: 0,
          },
          arrAns: ["b", "d", "s", "m"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cd8",
            index: 1,
            text: "c",
            explain: "d",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.420Z",
            updatedAt: "2020-04-25T18:26:16.420Z",
            __v: 0,
          },
          arrAns: ["o", "s", "d", "h"],
        },
        {
          item: {
            _id: "5ea480c8f139be2438237cdd",
            index: 1,
            text: "i",
            explain: "k",
            author_id: "5e85acd79018430a08cacdae",
            author: "admin",
            cardFolderId: "5ea480c8f139be2438237cd6",
            createdAt: "2020-04-25T18:26:16.444Z",
            updatedAt: "2020-04-25T18:26:16.444Z",
            __v: 0,
          },
          arrAns: ["q", "k", "h", "o"],
        },
      ],
      length : null
    };
  },
  mounted() {
    this.length = this.quiz.length;
  },
  methods: {},
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
