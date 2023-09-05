import axios from "axios"
import {useCookies} from "vue3-cookies";
import authUser from '@/services/AuthenicateUser'
import router from "@/router";

const { cookies } = useCookies()
const url = "https://bmx.onrender.com/";


const state = {
    users: null,
    user: null
}

const actions = {
  async fetchUsers({ commit }) {
    try {
      const { data } = await axios.get(`${url}users`);
      commit("setUsers", data.results);
    } catch (error) {
      console.log("There was an error trying to fetch users");
    }
  },

  async submitLogin({ commit }, loginData) {
    try {
      const { msg, token, result } = (await axios.post(`${url}login`, loginData))
        .data;
      if (result) {
        commit("setUser", { result, msg });
        cookies.set("loggedInUser", { token });
        authUser.applyToken(token);
        router.push({ name: "home" });
      } else {
        console.log(msg);
      }
    } catch (error) {}
  },
};

export default {
    state,
    actions
}
