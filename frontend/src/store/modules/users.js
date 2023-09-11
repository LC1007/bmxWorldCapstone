import axios from "axios";
import { useCookies } from "vue3-cookies";
import authUser from "@/services/AuthenicateUser";
import router from "@/router";
import sweet from 'sweetalert'

const { cookies } = useCookies();
const url = "https://bmxcap.onrender.com/";

const state = {
    users: null,
    user: null,
    userID: localStorage.getItem('userID') || null 
}

const mutations = {
  setUsers(state, data) {
    state.users = data;
  },
  setUser(state, data) {
    state.user = data;
  },
  setUserID(state, userID) {
    state.userID = userID;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const { data } = await axios.get(`${url}users`);
      commit("setUsers", data.users);
    } catch (error) {
      console.log("There was an error trying to fetch users");
    }
  },

  async fetchUser({commit}, userID){
    try {
      const { data } = await axios.get(`${url}user/${userID}`)
      commit('setUser', data.user[0])
    } catch (error) {
      console.log("There was an error trying to fetch user with ID:", userID);
    }
  },

  async submitLogin({ commit }, loginData) {
    try {
      const { msg, token, result, userID } = (await axios.post(`${url}login`, loginData)).data;
      if (result) {
        // const loggedID = result.userID

        localStorage.setItem('userID', userID)

        commit("setUser", { result });
        commit("setUserID", userID);
        // console.log("UserData: ", userID);

        cookies.set("loggedInUser", { token, result });
        authUser.applyToken(token);
        sweet({
          title: 'Login',
          text: msg,
          icon: 'success',
          timer: 4000
        })
        router.push({ name: "home" });
      } else {
        sweet({
          title: 'Error',
          text: msg,
          icon: 'error',
          timer: 4000
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
