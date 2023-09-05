import { createStore } from 'vuex'
import axios from 'axios'
import {useCookies} from 'vue3-cookies';
import router from '@/router';
// import usersModule from './modules/users'
import usersModule from './modules/users'
import productsModule from './modules/products'

const { cookies } = useCookies() 
const url = "https://bmx.onrender.com/";

export default createStore({
  state: {
    selectedBike: [],
    formData: [],
    loginForm: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users
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
    },
    setFormData(state, data){
      state.formData = data
    },
    setLogin(state, data){
      state.loginForm = data
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    async fetchBike({commit}, bmxID){
      try {
        const {data} = await axios.get(`${url}product/${bmxID}`)
        commit('setSelectedBike', data.result[0])
      } catch (error) {
        console.log(error);
      }
    },

    // async updateBike({commit}, {bmxID, ...updatedFields}){
    //   try {
    //     const updatedBike = {bmxID, ...updatedFields}
    //     const {data} = await axios.patch(`${url}product/${updatedBike.bmxID}`, updatedBike)
    //     commit('setBikes', data.result)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    async deleteProd({commit}, bmxID){
      try {
        const { data } = await axios.delete(`${url}product/${bmxID}`)
        commit('setDelete', data)
        location.reload()
      } catch (error) {
        
      }
    },

    async submitContent({commit}, formData){
      try {
        const { data } = await axios.post(`${url}register`, formData)
        commit('setFormData', data)
        console.log('success');
      } catch (error) {
        console.log(error);
      }
    },

    async submitLogin({commit}, loginData){
      try {
        const {token, result, msg } = (await axios.post(`${url}login`, loginData).data)
        if(result){
          commit('setUser', { result, msg })
          cookies.set("LoggedInUser", {token, result}, '1h')
        } else{
          console.log('error');
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
    // users: usersModule
    usersModule,
    productsModule
  }
})