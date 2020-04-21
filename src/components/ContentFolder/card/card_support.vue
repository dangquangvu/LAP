<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="90vw card_hover"
      style="margin:10px; max-height: 130px"
      :elevation="hover ? 8 : 4"
      @click.native="doSomething()"
      :to="item.to"
    >
      <v-card-title primary-title>
        <div>
          <h5 class="headline mb-0">{{ card_root.title }}</h5>
          <h6 class="font-weight-light pl-1">
            {{ card_root.description }} 
          </h6>
          <div class="d-inline-flex pa-2 pl-0" style=";align-content: center;">
            <v-img
              :src="card_root.img"
              aspect-ratio=""
              style="font-size: 15px;border-radius: 50%;width : 25px; height: 25px; margin:5px"
            ></v-img>
            <v-card-title class="pt-0 mt-0 pl-1">{{
              card_root.author
            }}</v-card-title>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {
      card_root: {
        id: 1,
        title: "Tiếng nhật",
        description: "0 thuật ngữ",
        img: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        author: "xyz",
      },
      item: {
        to: "/home/action",
      },
    };
  },
  computed: {},
  methods: {
    doSomething() {
      console.log("heeeeee");
    },
  },
};
</script>

<style scoped>
.card_hover {
  /* display: inline; */
  position: relative;
  /* overflow: hidden; */
}
.card_hover:hover {
  background-position: 0 100%;
  background-size: 100% 88%;
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  transition: background-size 0.25s ease-in;
  transition-duration: 0.3s;
  transition-property: width;
  transition-timing-function: ease-out;
}
.card_hover:hover:after,
.card_hover:focus:after,
.card_hover:active:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: rgb(255, 255, 255);
  transition: width 0.3s;
}
</style>
