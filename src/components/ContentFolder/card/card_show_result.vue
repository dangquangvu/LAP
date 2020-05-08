<template>
  <v-card class="100vw " style="margin:10px; min-height: 50px;cursor: pointer">
    <v-card-title primary-title v-if="card">
      <v-row>
        <v-col cols="12">
          <h5 class="headline mb-0">{{ card.text }}</h5>
        </v-col>
        <v-col cols="12" v-if="card.explain != card.choose">
          <v-card-title class="tick__false">
            {{ card.choose }} 
          </v-card-title>
        </v-col>
        <v-col cols="12">
          <v-card-title class="tick">
            {{ card.explain }}
          </v-card-title>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.card_hover {
  position: relative;
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
.tick__false {
  border: 0.125rem solid #e9525f;
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
  text-decoration-line: line-through;
}
</style>
