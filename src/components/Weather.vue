<template>
    <div class="containter weather-conatiner">
       <div> <img  :src="require(`@/assets/${pic}.png`)" alt=""> <span>{{check}}°</span>
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
          },
          pic(){
              if( this.weather.weather[0].description.match(/дождь/) != null){
                  return 'rain'
              }
              return 'sun'
               
          }
     }
 
}
</script>

<style>

</style>
