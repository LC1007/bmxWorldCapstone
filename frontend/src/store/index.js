import { createStore } from "vuex";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import router from "@/router";
// import usersModule from './modules/users'
import usersModule from "./modules/users";
import productsModule from "./modules/products";
import orders from "./modules/orders";

const { cookies } = useCookies();
// const url = "https://bmx.onrender.com/";

export default createStore({
  // state: {
  //   formData: [],
  //   loginForm: [],
  // },
  // getters: {},
  mutations: {
    // setBikes(state, data) {
    //   state.bikes = data;
    // },
    //   setFormData(state, data) {
    //     state.formData = data;
    //   },
    //   setLogin(state, data) {
    //     state.loginForm = data;
    //   },
    // setUsers(state, data) {
    //   state.users = data;
    // },
    // setUser(state, data) {
    //   state.user = data;
    // },
  },
  // actions: {
  // async submitContent({commit}, formData){
  //   try {
  //     const { data } = await axios.post(`${url}register`, formData)
  //     commit('setFormData', data)
  //     console.log('success');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // async submitLogin({commit}, loginData){
  //   try {
  //     const {token, result, msg } = (await axios.post(`${url}login`, loginData).data)
  //     if(result){
  //       commit('setUser', { result, msg })
  //       cookies.set("LoggedInUser", {token, result}, '1h')
  //     } else{
  //       console.log('error');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // },
  modules: {
    usermodule: usersModule,
    products: productsModule,
    orders: orders
  },
});
