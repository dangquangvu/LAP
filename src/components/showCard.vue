<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12" sm="12" md="10" lg="10" class="offset-md-2 offset-lg-2">
        <v-row style="justify:center">
          <v-col xs="12" sm="8" md="8" lg="6" cols="12">
            <v-card-title class="text--grey">
              <h1 v-if="admin">{{ admin.title }}</h1>
            </v-card-title>
            <template v-if="number != -1">
              <carousel
                :responsive="{
                  0: { items: 1 },
                }"
                :loop="true"
                :autoplay="false"
                :margin="2"
                :stagePadding="1"
                :autoplayHoverPause="false"
                :lazyLoad="true"
                v-if="arr.length != 0"
              >
                <!-- :dots = "" -->
                <template v-for="(n, i) in arr">
                  <flashCard :key="i" :front="n.text" :back="n.explain">
                  </flashCard>
                </template>
              </carousel>
            </template>
            <template v-else-if="number == -1">
              <carousel
                :responsive="{
                  0: { items: 1 },
                }"
                :loop="true"
                :autoplay="false"
                :margin="2"
                :stagePadding="1"
                :autoplayHoverPause="false"
                :lazyLoad="true"
                v-if="arr.length == 0"
              >
                <!-- :dots = "" -->

                <flashCard :front="`...`" :back="`...`"> </flashCard>
              </carousel>
            </template>
          </v-col>
          <v-col xs="12" sm="4" md="4" lg="6" cols="12">
            <v-row :class="{ height: $vuetify.breakpoint.smAndUp }"> </v-row>
            <v-card-title style="color: gray">
              học
            </v-card-title>
            <v-row>
              <v-col xs="12" sm="12" cols="12" class="pl-8">
                <ion-icon
                  name="layers-outline"
                  style="font-size: 25px;color: #4257b2;fill: #4257b2;"
                  class="pr-2 text--grey"
                ></ion-icon>
                Thẻ ghi nhớ</v-col
              >
              <v-col
                xs="12"
                sm="12"
                cols="12"
                class="pl-8"
                @click="learnRouter()"
              >
                <ion-icon
                  name="book-outline"
                  style="font-size: 25px;color: #4257b2;fill: #4257b2;"
                  class="pr-2 text--grey"
                ></ion-icon>
                Học
              </v-col>

              <v-col
                xs="12"
                sm="12"
                cols="12"
                class="pl-8"
                @click.stop="dialog = true"
              >
                <ion-icon
                  name="document-text-outline"
                  style="font-size: 25px;color: #4257b2;
    fill: #4257b2;"
                  class="pr-2"
                ></ion-icon
                ><span class="mb-12 text--grey">Kiểm tra</span></v-col
              >

              <v-dialog v-model="dialog" max-width="290">
                <v-card min-height="400px">
                  <v-card-title class="d-flex mx-auto text-center"
                    >Tùy Chọn</v-card-title
                  >
                  <v-divider></v-divider>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-subtitle>
                      Loại Câu Hỏi
                    </v-card-subtitle>
                    <v-card-text>
                      <v-radio-group v-model="dialogm1" column>
                        <v-radio label="Chọn thẻ" value="choose_card"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <!-- ===================== -->
                    <v-card-subtitle>
                      Thời gian
                    </v-card-subtitle>
                    <v-col class="d-flex mx-auto" cols="10">
                      <v-select
                        :items="items"
                        label="phút"
                        dense
                        v-model="select"
                        :rules="[(v) => !!v || 'Chọn thời gian kiểm tra']"
                        required
                      ></v-select>
                    </v-col>
                  </v-form>
                  <v-col class="d-flex mx-auto" cols="10">
                    <v-card-actions
                      class="mx-auto text-center justify-space-between"
                    >
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Close</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="createTest()"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-col>
                </v-card>
              </v-dialog>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="10" lg="8" class="offset-md-1 offset-lg-1">
        <v-card class="mx-auto" max-width="100%">
          <v-card-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  color="deep-purple accent-4"
                  v-on="on"
                  @click="deleteFlashCard()"
                >
                  <ion-icon
                    name="trash-outline"
                    style="font-size: 25px;color: #4257b2;fill: #4257b2;"
                    class="pr-2 text--grey"
                  ></ion-icon>
                </v-btn>
              </template>
              <span>delete flashcard</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div v-for="(n, i) in arr" :key="i" class="grey lighten-5">
      <v-col xs="12" sm="12" md="10" lg="8" class="offset-md-1 offset-lg-1">
        <cardInfor :card="n"></cardInfor>
      </v-col>
    </div>
  </v-container>
</template>
<script>
import carousel from "vue-owl-carousel";
import cardInfor from "../components/ContentFolder/card/cardInfor";
import cardService from "../controller/cardService";
import flashCard from "../components/leanCard/flashcard";
import quiz from "../controller/quiz";
import test from "../controller/test";
export default {
  data() {
    return {
      valid: true,
      value: true,
      id: this.$route.params.id,
      arr: [],
      number: 0,
      text: {
        text: "aaa",
        back: "baaaa",
      },
      admin: null,
      to: `/leanCard/${this.id}`,
      dialogm1: "choose_card",
      dialog: false,
      items: [5, 10, 15, 20, 25, 30, 45, 50, 55, 60, 60, 80, 90, 120, 160],
      select: null,
      user: null,
    };
  },
  mounted() {
    this.getData();
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    getData() {
      if (!this.$store.state.cardPool.showCardPool.idFolder) {
        cardService
          .getAllCardPool(this.id)
          .then((data) => {
            let value = {
              idFolder: this.id,
              arrPool: data.message,
            };
            this.$store.commit("cardPool/setShow", value);
            this.$store.dispatch("cardPool/addItemInArrAct", value);
            this.arr = data.message;
            // console.log(this.arr);
            this.number = data.message.length == 0 ? -1 : data.message.length;
            let quizArr = quiz.randomQuiz(data.message);
            this.$store.dispatch("quiz/assginQuizAct", quizArr);
            // console.log(quizArr, "qizzzzzzzztreeeeeeeeeee");
            cardService
              .getInforCardFolder(this.id)
              .then((data) => {
                console.log(data);
                this.admin = data.message[0];
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //create quiz store
        this.arr = this.$store.state.cardPool.showCardPool.arrPool;
        // console.log(this.arr);
        let quizArr = quiz.randomQuiz(this.arr);
        this.$store.dispatch("quiz/assginQuizAct", quizArr);
        // console.log(quizArr, "qizzzzzzzz");
        this.number =
          this.$store.state.cardPool.showCardPool.arrPool.length == 0
            ? -1
            : this.$store.state.cardPool.showCardPool.arrPool.length;
        if (this.$store.state.cardFolder.folderFocus) {
          this.admin = this.$store.state.cardFolder.folderFocus[0];
        } else {
          cardService
            .getInforCardFolder(this.id)
            .then((data) => {
              this.admin = data.message[0];
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    learnRouter() {
      this.$router.push(`/leanCard/${this.id}`);
    },
    createTest() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        // console.log(this.select, this.user.user,test);
        let body = {
          authorId: this.admin.author_id,
          author: this.admin.author,
          guestTestId: this.user.user._id,
          guestTest: this.user.user.fullname,
          title: this.admin.title,
          about_time: this.select,
        };
        console.log(body);
        test
          .generationTest(body, this.id)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        this.$router.push(`/test/${this.id}`);
      }
    },
    deleteFlashCard() {
      console.log("xxx");
      cardService
        .deleteCardFolder(this.id)
        .then(() => {
          setTimeout(this.$router.push("/home/main"), 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { cardInfor, flashCard, carousel },
};
</script>

<style scoped>
.height {
  height: 60px;
}
.text--grey {
  color: #455358;
}
.text--yellow {
  color: yellow;
}
.text--size {
  font-size: 22px;
}
.text--red {
  color: red;
}
</style>
//style="min-height:350px;max-weight:550px" vue-flashcard
