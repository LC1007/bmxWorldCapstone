import axios from "axios"
const url = "https://bmxcap.onrender.com/";

const state = {
  bikes: [],
  featuredBikes: null,
  selectedBike: null,
  prodDetails: null,
  cart: null,
  bikeID: localStorage.getItem('bikeID') || null,
  sortOrder: 'asc',
  sortOption: 'amount'
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
  setFeaturedBikes(state, data){
    state.featuredBikes = data
  },
  setProdDetails(state, data) {
    state.prodDetails = data;
  },
  setSelectedBike(state, data) {
    state.selectedBike = data;
  },
  setCart(state, data) {
    state.cart = data;
  },
  setBikeID(state, data) {
    state.bikeID = data;
  },
  setUpdateBike(state, updatedBike) {
    const exisitingProdID = state.bikes.findIndex(
      (bike) => bike.bmxID === updatedBike.bmxID
    );
    if (exisitingProdID !== 1) {
      state.bikes[exisitingProdID] = updatedBike;
    }
  },
  setSortOrder(state, sortOrder) {
    state.sortOrder = sortOrder;
  },
  setSortOption(state, option){
    state.sortOption = option
  }
};

const actions = {
  async fetchBikes({ commit }) {
    try {
      const { data } = await axios.get(`${url}products`);
      commit("setBikes", data.products);
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

  async updateBike({commit, dispatch}, { bmxID, ...updatedFields }){
    try {
      const updatedBike = { bmxID, ...updatedFields }
      const { data } = await axios.patch(`${url}product/${updatedBike.bmxID}`, updatedBike)
      commit('setBikes', data.products)
      dispatch('fetchBikes')
    } catch (error) {
      console.log(error);
    }
  },

  async addToCart({ commit }, loggedInUserID) {
    try {
      const bmxID = localStorage.getItem('bikeID')
      const { data } = await axios.post(`${url}order/${loggedInUserID}/${bmxID}`);
      commit("setCart", data);
      console.log(data.result);
    } catch (error) {
      console.log(error);
    }
  },

  // Sort/Search/Filter

  // async searchProds({commit}, prodName){
  //   try {
  //     const { data } = await axios.get(`${url}products/search/${prodName}`)
  //     commit('setSearchBikes', data.product)
  //     console.log(data.product);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async featuredProducts({commit}){
    try {
      const { data } = await axios.get(`${url}products/featured`)
      commit('setFeaturedBikes', data.products)
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
