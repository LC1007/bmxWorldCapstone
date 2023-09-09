import axios from "axios";
const url = "https://bmxcap.onrender.com/";

const state = {
    orders: null
}

const mutations = {
    setOrders(state, orders){
        state.orders = orders
    }
}

const actions = {
    async fetchOrders({commit}){
        try {
            const userID = localStorage.getItem('userID')
            const { data } = await axios.get(`${url}orders/${userID}`);
            commit("setOrders", data.results);
        } catch (error) {
            console.log(error);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

// const actions = {
//   async fetchOrders({ commit }) {
//     try {
//       const userID = localStorage.getItem("userID");
//       const { data } = await axios.get(`${url}orders/${userID}`);
//       commit("setOrders", data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };