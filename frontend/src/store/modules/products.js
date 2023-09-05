import axios from "axios"
const url = "https://bmx.onrender.com/";

const state = {
  bikes: null
};

const mutations = {
  setBikes(state, data) {
    state.bikes = data;
  }
};

const actions = {
  async fetchBikes(context) {
    try {
      const { data } = await axios.get(`${url}products`);
      context.commit("setBikes", data.results);
      console.log(data.results);
    } catch (error) {
      console.log("There was an error trying to fetch products:", error);
    }
  },

};

export default {
  state,
  mutations,
  actions,
};
