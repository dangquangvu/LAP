<template>
  <v-form id="app">
    <v-app>
      <v-container fluid fill-height class="">
        <v-layout flex>
          <v-flex xs11 sm12>
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
                v-model="name"
                :rules="nameRules"
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
                <noteContent
                  :index="n.index"
                  v-model="n[i]"
                  @deleteItemParent="deleteItem($event)"
                ></noteContent>
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

              <!-- <v-btn color="error" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="warning" @click="resetValidation">
                Reset Validation
              </v-btn> -->
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
    name: "",
    nameRules: [(v) => !!v || "Title is required"],
    description: "",
    number_card_create: 2,
    object_card_create: [
      { index: 1, text: "111", explain: "" },
      { index: 2, text: "222", explain: "" },
    ],
    item: { index: "", text: "", explain: "" },
  }),
  computed: {},
  components: {
    noteContent,
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    addNewCard() {
      let index = this.object_card_create.length;
      let newItem = Object.assign({}, this.item);
      newItem.index = index + 1;
      this.object_card_create.push(newItem);
      this.$store.dispatch("createCard/action_addCard");
    },
    deleteItem(value) {
      Array.prototype.remove = function() {
        var what,
          a = arguments,
          L = a.length,
          ax;
        while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
          }
        }
        return this;
      };
      console.log(value);
      this.object_card_create.remove(this.object_card_create[value-1]);
      console.log(this.object_card_create)
    },
    upData() {},
  },
};
</script>

<style></style>
