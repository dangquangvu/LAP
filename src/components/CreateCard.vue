<template>
  <v-form id="app">
    <v-app>
      <v-container fluid fill-height class="">
        <v-layout flex>
          <v-flex xs11 sm12>
            <v-snackbar v-model="open" >
              {{ message }}
              <v-btn color="red" text @click="open = false">
                Close
              </v-btn>
            </v-snackbar>
            <v-layout flex>
              <v-flex xs5> <h2>Tạo bộ thẻ</h2></v-flex>
              <v-spacer></v-spacer>
              <v-flex xs3>
                <v-btn color="success" @click="validate">
                  Tạo
                </v-btn>
              </v-flex>
            </v-layout>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Tiêu đề"
                placeholder="Nhập tiêu đề"
                required
              ></v-text-field>

              <v-text-field
                v-model="description"
                label="Mô tả"
                placeholder="Thêm mô tả"
                required
              ></v-text-field>
              <div v-for="(n, i) in object_card_create" :key="i">
                <template v-if="n.show == true">
                  <noteContent
                    :index="n.index"
                    @deleteItemParent="deleteItem($event)"
                  ></noteContent>
                </template>
              </div>

              <v-container fluid class="">
                <v-layout>
                  <v-flex xs12 align-content-center="true">
                    <v-card outlined @click="addNewCard">
                      <v-layout>
                        <v-flex xs12 align-content-center="true">
                          <v-card-text color="warning">Thêm thẻ</v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-btn color="success" @click="upData">
                Updata
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </v-form>
</template>

<script>
import noteContent from "../components/ContentFolder/note/note_content";
export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [(v) => !!v || "Title is required"],
    description: "",
    number_card_create: 2,
    object_card_create: [
      { index: 1, show: true },
      { index: 2, show: true },
    ],
    item: { index: "", show: true },
    message: "",
    open: false,
  }),
  computed: {},
  components: {
    noteContent,
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
         this.snackbar = true;
        let value = {
          title: this.title,
          description: this.description,
        };
        this.$store
          .dispatch("createCard/createCard", value)
          .then((data) => {
           this.open = true;
            this.message = data.message;
            console.log(data);

            // this.$router.push("home/main");
          })
          .catch((error) => {
            this.loading = false;
            this.message = error;
          });
      }
    },
    addNewCard() {
      let index = this.object_card_create.length;
      let newItem = Object.assign({}, this.item);
      newItem.index = index + 1;
      this.object_card_create.push(newItem);
      this.$store.dispatch("createCard/action_addCard");
    },
    deleteItem(value) {
      this.object_card_create[value - 1].show = false;
      this.$store.commit("createCard/removeItem", value);
    },
    upData() {},
  },
};
</script>

<style></style>
