<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-radio-group v-model="radios" :mandatory="false">
        <v-radio label="Radio 1" color="orange" value="radio-1"></v-radio>
        <v-radio label="Radio 2" color="orange" value="radio-2"></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      radios: "radio-1",
    };
  },
};
</script>

<style></style>
