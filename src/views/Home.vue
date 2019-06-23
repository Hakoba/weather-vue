<template>
  <div class="home">
    <!-- <span @click="getWeather"> kekekkeek</span> -->
    <city :weather="weather"/>
    <weather :weather ="weather" />
    <det :weather="weather"></det>
    <preloader/>
  </div>

</template>

<script>
import Det from '@/components/Details.vue';
import City from '@/components/City.vue'
import Weather from '@/components/Weather.vue'
import Preloader from '@/components/Preloader.vue'
export default {
  name: "home",
  data() {
    return {
      weather: ""
    };
  },
  components: {
    Det,
    City,
    Weather,
    Preloader,
  },
  methods: {
     getWeather() {
      
      this.$store.dispatch("getWeather", "London");
     this.weather = this.$store.state.weather;
      
    }
  },
  beforeMount(){
      this.weather = this.$store.state.weather;
  },
  mounted() {
    
    console.log('bef')
       this.getWeather()
      console.log('af')
 
  }
};
</script>
