<template>
    <div class="containter weather-conatiner">
       <div> <img  src="../assets/sun.png" alt=""> <span>{{check}}°</span>
        <p >{{weather.weather[0].description}}</p>
        </div>
    </div>
</template>

<script>
export default {
 data(){
     return{    
         temperature: ''
     }
 },
     computed: {
          check(){
          this.temperature = this.$store.state.temperature;
          return this.temperature
          },
          weather(){
              return this.$store.state.weather
          }
     }
 
}
</script>

<style>

</style>
