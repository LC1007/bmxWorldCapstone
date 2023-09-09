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
  setBikes(state, data) {
    state.bikes = data;
  },
  // Sorting
  // setSortData(state, sortedData){
  //   if(sortedData === 'prodName'){
  //     state.setBikes.sort((a, b) => a.prodName.localeCompare(b.prodName));
  //   } else if(sortedData === 'amount'){
  //     state.setBikes.sort((a, b) => a.amount - b.amount)
  //   }
  // },
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

  async addToCart({ commit }, loggedInUserID) {
    try {
      const bmxID = localStorage.getItem('bikeID')
      const { data } = await axios.post(`${url}orders/${loggedInUserID}/${bmxID}`);
      commit("setCart", data.result);
      // console.log(data.result);
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
