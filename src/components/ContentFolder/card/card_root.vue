<template>
    <v-card class=" 90vw" style="margin:10px; max-height: 130px" :outlined="true">
      <v-card-title primary-title>
        <div>
          <h4 class="headline mb-0">{{ card_root.title }}</h4>
          <h6 class="font-weight-light pl-1">{{ card_root.description }}</h6>
          <div class="d-inline-flex pa-2 pl-0" style=";align-content: center;">
            <v-img
              :src="card_root.img"
              aspect-ratio=""
              style="font-size: 15px;border-radius: 50%;width : 25px; height: 25px; margin:5px"
            ></v-img>
            <v-card-title class="pt-0 mt-0 pl-1">{{card_root.author}}</v-card-title>
          </div>
        </div>
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      card_root: {
        id:1,
        title: "Tiếng nhật",
        description: "0 thuật ngữ",
        img: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        author: "xyz"
      }
    };
  }
};
</script>

<style></style>
