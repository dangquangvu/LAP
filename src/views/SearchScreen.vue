<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#4257b2"
      dark
    >
      <!-- <ion-icon name="arrow-back-outline"></ion-icon> -->
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

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <span>register</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
        <span>login</span>
      </v-tooltip>
      
    </v-app-bar>

    <v-content class="grey  lighten-5">
      <mainScreen></mainScreen>
    </v-content>
  </v-app>
</template>

<script>
import mainScreen from "../components/search/mainScreen";
export default {
  data() {
    return {
      drawer: null,
    };
  },
  components: {
    mainScreen,
  },
};
</script>
