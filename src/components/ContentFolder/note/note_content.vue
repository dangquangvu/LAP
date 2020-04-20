<template>
  <v-container fluid class="">
    <v-layout>
      <v-flex xs12>
        <v-card outlined>
          <v-toolbar class="pt-2">
            <v-layout>
              <v-flex xs1>
                <v-toolbar-title class="black--text"
                  ><h5>{{ this.index }}</h5></v-toolbar-title
                ><br />
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs1>
                <!-- <v-btn class="mx-2" fab dark  small color="white" ></v-btn> -->
                  <ion-icon
                    name="close-sharp"
                    style="cursor: pointer;font-size : 20px;color: black; padding-top: 5px"
                    @click="deleteItem()"
                  ></ion-icon>
                 </v-flex
            ></v-layout>
          </v-toolbar>
          <v-form>
            <v-container fluid>
              <v-layout>
                <v-flex xs12 sm5 md5>
                  <v-text-field
                    label="Thuật ngữ"
                    v-model.lazy.trim="text_note"
                  ></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="Định nghĩa"
                    v-model.lazy.trim="text_explain"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      text_note: "",
      text_explain: "",
    };
  },
  watch: {
    text_note(val, oldVal) {
      // console.log(val,oldVal)
      if (val != oldVal) {
        let item = {
          index: this.index,
          text: val,
        };
        this.$store.commit("createCard/addTextField", item);
      }
    },
    text_explain(val, oldVal) {
      if (val != oldVal) {
        let item = {
          index: this.index,
          explain: val,
        };
        this.$store.commit("createCard/addTextField", item);
      }
    },
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItemParent", this.index);
    },
  },
};
</script>

<style></style>
