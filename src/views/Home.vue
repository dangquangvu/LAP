<template>
  <v-app id="inspire">
    
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#4257b2"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
          <img alt="Vue logo" src="../assets/images.png" /></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <navSidebar></navSidebar>
    </v-navigation-drawer>
    <!-- style="padding-top: 0px" -->
    <v-content style="">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navSidebar from "../components/sidebar/sidebarHeader";
export default {
  props: [],
  data: () => ({
    drawer: null
  }),
  components: {
    navSidebar
  }
};
</script>
