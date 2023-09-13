import axios from "axios"
import router from '@/router'
const url = "https://bmxcap.onrender.com/";

const state = {
  bikes: [],
  featuredBikes: null,
  selectedBike: null,
  selectedBikeEdit: null,
  prodDetails: null,
  cart: null,
  bikeID: localStorage.getItem("bikeID") || null,
  sortOrder: "asc",
  sortOption: "amount",
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
  setSelectedBikeEdit(state, data){
    state.selectedBikeEdit = data
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
      const { products } = (await axios.get(`${url}products`)).data;
      commit("setBikes", products);
    } catch (error) {
      console.log("There was an error trying to fetch products:", error);
      router.push({name: 'login'})
    }
  },

  async fetchBike({ commit }, bmxID) {
    try {
      const { result } = (await axios.get(`${url}product/${bmxID}`)).data;

      localStorage.setItem("bikeID", result.ID);

      commit("setSelectedBike", result[0]);
      commit("setSelectedBikeEdit", result[0]);
      commit("setBikeID", ID);
      return result[0];
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

  async updateBike({ commit, dispatch }, bike) {
    try {
      const { products } = (await axios.patch(`${url}product/${bike.bmxID}`, bike)).data;
      commit("setBikes", products);
      dispatch("fetchBikes");
      router.push({name: 'admin'})
    } catch (error) {
      console.log(error);
    }
  },

  // Single product add to cart
  async addToCart({ commit }, loggedInUserID) {
    try {
      const bmxID = localStorage.getItem("bikeID");
      const { data } = await axios.post(`${url}order/${loggedInUserID}/${bmxID}`);
      commit("setCart", data);
      console.log(data.result);
    } catch (error) {
      console.log(error);
    }
  },

  // All products add to cart
  async addProductToCart({ commit }, {loggedInUserID, bmxID}) {
    try {
      console.log("Store:", bmxID, loggedInUserID);
      const { data } = await axios.post(`${url}order/${loggedInUserID}/${bmxID}`);
      commit("setCart", data);
      console.log(data.result);
    } catch (error) {
      console.log(error);
    }
  },

  // Sort/Search/Filter

  async featuredProducts({ commit }) {
    try {
      const { data } = await axios.get(`${url}products/featured`);
      commit("setFeaturedBikes", data.products);
    } catch (error) {
      console.log(error);
    }
  },

  async searchProd({commit}, searchQuery){
    try {
      const { data } = await axios.get(`${url}products/search/${searchQuery}`)
      commit('setBikes', data.product)
    } catch (error) {
      console.error("Error fetching products:", error);
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
