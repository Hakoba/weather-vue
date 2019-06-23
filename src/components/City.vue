<template>
  <div class="container top">
    <div class="container-item">
      <div v-if="popupState" class="input-field">
      <input @key-up.enter="setCity" v-model="city"  class='input-text' type="text">
      <span @click="setCity">Ок</span>
      </div>
      <h2  v-if="!popupState">{{transliterate(weather.name,true)}}</h2>
      <div  v-if="!popupState" class="property">
        <span @click="popupState = !popupState">Сменить город</span> *
        <span @click="getMyLocation">Моё метоположение</span>
      </div>
    </div>
    <div id="cf" class="container-item ">
      <div class="deg">
        °
        <span :class="{active: isC}" @click="setTemperatureType('C')" class="left">C</span>
        <span :class="{active : !isC }" @click="setTemperatureType('F')" class="right">F</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isC:true,
      popupState: false,
      city: ''
    }
  },
  methods: {
    setTemperatureType(type) {
      this.$store.commit('setType',type)
      type == 'C' ?  this.isC = true: this.isC = false;
    },
    transliterate(text, engToRus){
    let
			rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
			eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g)
		;
			for(let x = 0; x < rus.length; x++) {
				text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
				text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
			}
			return text;
    },
    setCity(){
      if(this.city == ''){
      this.popupState = false
      
      }else{
        if(this.city.match(/[а-яА-Я]/) != null){
      this.city = this.transliterate(this.city, true)
        }
      this.$store.dispatch("getWeather", this.city);
      this.popupState = false
      }
    },
    getMyLocation(){
            this.$getLocation()
          .then(coordinates => {
            console.log(coordinates)
                this.$store.dispatch('getWeatherByCoordinates', coordinates)
  });
    }
    
	},
  computed: {
      weather(){
              return this.$store.state.weather
          }
  },
  
};
</script>

<style>
</style>
