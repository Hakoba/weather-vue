<template>
  <div v-if="preloader" class="preloader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false
    };
  },
  computed: {
    preloader() {
      return this.$store.state.preloaderState;
    }
  }
};
</script>

<style lang='scss'>
.preloader {
  width: 100%;
  height: 100vh;
  background: rgba(#498cec, 0.95);
  position: absolute;
  top: 0;
  .loader {
    border: 7px solid #eae4ea;
    width: 100px;
    height: 100px;
    border-radius: 50%;
     box-shadow: 0 -2px 2px rgba(0,0,0,.2);
    border-bottom: 5px solid rgb(43, 196, 89);
    animation: loader 2.4s linear infinite;
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
