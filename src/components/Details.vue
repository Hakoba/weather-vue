<template>
  <div class="footer container">
    <div class="container-item">
      <p class="property">Ветер</p>

      <strong class="value">{{weather.wind.speed}}</strong>
      <span class="types"> м/с, {{windDirection}}</span>
    </div>
    <div class="container-item">
      <p class="property">Давление</p>

      <strong class="value">{{weather.main.pressure}}</strong>
      <span class="types"> мм рт. ст.</span>
    </div>
    <div class="container-item">
      <p class="property">Влажность</p>

      <strong class="value">{{weather.main.humidity}}</strong>
      <span class="types">%</span>
    </div>
    <div class="container-item">
      <p class="property">Вероятность дождя</p>

      <strong class="value">{{weather.clouds.all}}</strong>
      <span class="types">%</span>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
        weather(){
              return this.$store.state.weather
          },
        windDirection(){
            let deg = this.weather.wind.deg
            if (deg<90) {
                return 'северный'
            }else if(deg>=90 && deg<180){
                return 'восточный'
            }else if(deg>=180 && deg<270){
                return 'южный'
            }else return 'западный'
        }
  }
};
</script>