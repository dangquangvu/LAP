<template>
  <v-container fluid>
    <bufferRoot />
    <v-row>
      <v-col v-for="n in 6" :key="n" sm="12" md="4">
        <cardRoot></cardRoot>
      </v-col>
    </v-row>
    <KK />
    <carousel></carousel>
  </v-container>
</template>
<script>
import bufferRoot from "../components/ContentFolder/buffer/buffer_root";
import KK from "../components/ContentFolder/buffer/khuyenKhich";
import cardRoot from "../components/ContentFolder/card/card_root";
import carousel from "../components/ContentFolder/slick/carousel";
export default {
  components: {
    carousel,
    cardRoot,
    KK,
    bufferRoot
  }
};
</script>

<style scoped></style>
