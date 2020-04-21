/* eslint-disable */
<template>
  <!-- <img src="https://placeimg.com/200/200/any?1">

    <img src="https://placeimg.com/200/200/any?2">

    <img src="https://placeimg.com/200/200/any?3">

    <img src="https://placeimg.com/200/200/any?4"> -->
  <v-row>
    <v-col>
      <carousel :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},960:{items:3,nav:false}}" :loop="true" :autoplay="true" :margin=2 :stagePadding='1' :autoplayHoverPause='true'>
        <template v-for="n in 6">
          <!-- <div style="" class="100vh" :key="n"> -->
          <Cardsupport :key="n"></Cardsupport>
          <!-- </div> -->
        </template>
      </carousel>
    </v-col>
  </v-row>
</template>

<script>
import carousel from "vue-owl-carousel";
import Cardsupport from "../card/card_support";
export default {
  components: { carousel, Cardsupport }
};
</script>

<style scoped>


.sizeSm {
    width: 10px;
}
</style>
