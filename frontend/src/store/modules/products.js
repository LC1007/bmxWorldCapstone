import axios from "axios"
const url = "https://bmxcap.onrender.com/";

const state = {
  bikes: null,
  selectedBike: null,
  prodDetails: null,
  cart: null,
  bikeID: localStorage.getItem('bikeID') || null
};

const getters = {
  getProduct(state){
    return state.selectedBike;
  },
}

const mutations = {
  setBikes(state, updatedBike) {
    state.bikes = updatedBike;
  },
  setProdDetails(state, data){
    state.prodDetails = data
  },
  setSelectedBike(state, data){
    state.selectedBike = data;
  },
  setCart(state, data){
    state.cart = data
  },
  setBikeID(state, data){
    state.bikeID = data
  },
  setUpdateBike(state, updatedBike){
    const exisitingProdID = state.bikes.findIndex((bike) => bike.bmxID === updatedBike.bmxID)
    if(exisitingProdID !== 1){
      state.bikes[exisitingProdID] = updatedBike
    }
  }
};

const actions = {
  async fetchBikes({ commit }) {
    try {
      const { data } = await axios.get(`${url}products`);
      commit("setBikes", data.products);
      // console.log("Products: ", data.products);
    } catch (error) {
      console.log("There was an error trying to fetch products:", error);
    }
  },

  async fetchBike({ commit }, bmxID) {
    try {
      const { data } = await axios.get(`${url}product/${bmxID}`);

      localStorage.setItem("bikeID", data.ID);

      commit("setSelectedBike", data.result[0]);
      commit("setBikeID", data.ID);
      // console.log("This is a test: ", data.result[0]);
      return data.result[0];
      
    } catch (error) {
      console.log(error);
    }
  },

  async createProd({ commit }, addProd) {
    try {
      const { data } = await axios.post(`${url}products`, addProd);
      commit("setProdDetails", data);
    } catch (error) {}
  },

  async updateBike({commit}, { bmxID, ...updatedFields }){
    try {
      const updatedBike = { bmxID, ...updatedFields }
      const { data } = await axios.patch(`${url}product/${updatedBike.bmxID}`, updatedBike)
      commit('setBikes', data.products)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  },

  async addToCart({ commit }, loggedInUserID) {
    try {
      const bmxID = localStorage.getItem('bikeID')
      const { data } = await axios.post(`${url}order/${loggedInUserID}/${bmxID}`);
      commit("setCart", data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
