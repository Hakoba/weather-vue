<template>
  <div class="footer container">
    <div class="container-item">
      <p class="property">Ветер</p>

      <strong class="value">{{weather.wind.speed}}</strong>
      <span>м/с, {{windDirection}}</span>
    </div>
    <div class="container-item">
      <p class="property">Давление</p>

      <strong class="value">{{weather.main.pressure}}</strong>
      <span>мм рт. ст.</span>
    </div>
    <div class="container-item">
      <p class="property">Влажность</p>

      <strong class="value">{{weather.main.humidity}}</strong>
      <span>%</span>
    </div>
    <div class="container-item">
      <p class="property">Вероятность дождя</p>

      <strong class="value">{{weather.clouds.all}}</strong>
      <span>%</span>
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