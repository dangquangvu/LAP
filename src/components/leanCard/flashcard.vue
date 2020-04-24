<template>
  <div>
    <div
      @click="isToggle = !isToggle"
      v-bind:style="{ backgroundColor: colorFront, color: colorTextFront }"
      v-show="!isToggle"
      class="animated flipInX flashcard"
      style="min-height:350px;max-width:500px"
    >
      <div class="card-header" style="padding-bottom: 15px;">
        {{ headerFront }}
      </div>
      <div class="card-content center">
        <p v-bind:style="{ fontSize: textSizeFront, fontWeight: '' }">
          {{ front }}
        </p>
        <img v-if="imgFront != ''" :src="imgFront" width="200" height="200" />
      </div>
      <div class="card-footer">{{ footerFront }}</div>
    </div>
    <div
      @click="isToggle = !isToggle"
      v-bind:style="{ backgroundColor: colorBack, color: colorTextBack }"
      v-show="isToggle"
      class="animated flipInX flashcard"
      style="min-height:350px;max-width:500px"
    >
      <div class="card-header" style="padding-bottom: 15px;">
        {{ headerBack }}
      </div>
      <div class="card-content center">
        <p v-bind:style="{ fontSize: textSizeBack, fontWeight: '' }">
          {{ back }}
        </p>
        <img v-if="imgBack != ''" :src="imgBack" width="200" height="200" />
      </div>
      <div class="card-footer">{{ footerBack }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["front", "back"],
  data() {
    return {
      isToggle: false,
      imgFront: "",
      imgBack: "",
      colorTextFront: "black",
      colorTextBack: "white",
      colorFront: "white",
      colorBack: "#2ecc71",
      textSizeFront: "20px",
      textSizeBack: "20px",
      headerFront: "",
      headerBack: "",
      footerFront: "",
      footerBack: "",
    };
  },
};
</script>
<style scoped>
.center {
  text-align: center;
}

.flashcard {
  cursor: pointer;
  border-radius: 10px;
  margin: 20px;
  padding: 25px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.flashcard:hover {
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.8);
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 3deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -2deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 3deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  }
  to {
    transform: perspective(400px);
  }
}

.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
}
</style>
