<template>
  <vueper-slides  fixed-height="300px" :arrows-outside="true" :bullets-outside="true">
    <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
};
</script>

<style>

</style>
