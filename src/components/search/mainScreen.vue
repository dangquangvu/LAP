<template>
  <v-container fluid class="mainColor" >
    <v-row no-gutters>
      <v-col cols="12" sm="3" 
     >
        <navSearch></navSearch>
      </v-col>
      <v-col cols="12" sm="9">
        <contentSearch></contentSearch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navSearch from './navSearch';
import contentSearch from './contentSearch'
export default {
 data() {
    return {
     cost :[
       {}
     ]
    };
  },
  components :{
    navSearch, contentSearch
  }
};
</script>

<style scoped>
.mainColor{
  background: #f4f4f4;
  height : 100%;
}

</style>
