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
  background: rgba(#498cec, 0.98);
  position: absolute;
  top: 0;
  .loader {
    border: 5px solid #eae4ea;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    border-bottom: 5px solid rgb(43, 196, 89);
    animation: loader 2.4s linear infinite;
    position: absolute;
    bottom: 5%;
    right: 15%;

   
    
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
