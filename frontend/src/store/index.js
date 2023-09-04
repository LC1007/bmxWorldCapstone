import { createStore } from 'vuex'
import axios from 'axios'
const url = "https://bmx.onrender.com/";

export default createStore({
  state: {
    bikes: [],
    selectedBike: []
  },
  getters: {
  },
  mutations: {
    setBikes(state, updatedBike){
      state.bikes = updatedBike
    },
    updateBike(state, updatedBike){
      const exisitingProdID = state.bikes.findIndex((bike) => bike.bmxID === updatedBike.bmxID)
      if(exisitingProdID !== 1){
        state.bikes[exisitingProdID] = updatedBike
      }
    },
    setSelectedBike(state, bike){
      state.selectedBike = bike
    },
    setDelete(state, data){
      state.bikes = data
    }
  },
  actions: {
    async fetchBikes({commit}){
      const {data} = await axios.get(`${url}products`)
      commit("setBikes", data.results);
    },

    async fetchBike({commit}, bmxID){
      try {
        const {data} = await axios.get(`${url}product/${bmxID}`)
        commit('setSelectedBike', data.result[0])
      } catch (error) {
        console.log(error);
      }
    },

    async updateBike({commit}, {bmxID, ...updatedFields}){
      try {
        const updatedBike = {bmxID, ...updatedFields}
        const {data} = await axios.patch(`${url}product/${updatedBike.bmxID}`, updatedBike)
        commit('setBikes', data.result)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },

    async deleteProd({commit}, bmxID){
      try {
        const { data } = await axios.delete(`${url}product/${bmxID}`)
        commit('setDelete', data)
        location.reload()
      } catch (error) {
        
      }
    }
  },
  modules: {
  }
})