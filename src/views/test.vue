<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#4257b2"
      dark
    >
      <ion-icon name="arrow-back-outline"></ion-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">LAP</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
        /></v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content class="grey  lighten-5">
      <testCardDetail></testCardDetail>
    </v-content>
  </v-app>
</template>

<script>
import testCardDetail from "../components/testCardDetail";
export default {
  data() {
    return {
      drawer: null,
    };
  },
  components: {
    testCardDetail,
  },
};
</script>

<style></style>
