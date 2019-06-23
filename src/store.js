import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

  mutations: {
    setWeather(state, payload) {
      console.log(payload)
      state.weather = payload
      state.temperature = (state.weather.main.temp - 273.15).toFixed(0)
    },
    setType(state, payload) {
      if (payload == 'F') {
        // ( K − 273,15) × 9/5 + 32 = 65,93 °F
        state.temperature = ((state.weather.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
      } else {

        //K − 273,15 =  °C
        state.temperature = (state.weather.main.temp - 273.15).toFixed(0)
      }
    },
    setPreloaderState(state,payload){
      state.preloaderState = payload;
    }
    

  },
  actions: {
    async getWeather({commit},payload) {
      payload = payload.charAt(0).toUpperCase() + payload.slice(1);
      commit('setPreloaderState',true)
      try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&lang=ru&APPID=dde71fbac0787f1bd980572ef1162a55`)
      commit("setWeather", res.data);
      commit('setPreloaderState',false)
     
      console.log('gw')
      }catch(e) {
        // state.temperature = 'Ошибка Api, соре'
        commit('setPreloaderState',false)
    }
    },
    async getWeatherByCoordinates({commit},payload) {
      commit('setPreloaderState',true)
        try{
          let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(payload.lat).toFixed(0)}&lon=${(payload.lng).toFixed(0)}&lang=ru&APPID=dde71fbac0787f1bd980572ef1162a55
          `)
          commit("setWeather", res.data);
          commit('setPreloaderState',false)
        } catch(e) {
          // state.temperature = 'Ошибка Api, соре'
          commit('setPreloaderState',false)
      }
    }
  },
  state: {
    temperature: '42',
    preloaderState: false,
    weather: {
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      main: {
        temp: 293.96,
        pressure: 1021,
        humidity: 43,
        temp_min: 291.15,
        temp_max: 296.48
      },
      wind: { speed: 3.6, deg: 180 },
      clouds: { all: 0 },
    },
  },
})