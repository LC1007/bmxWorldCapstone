import axios from "axios";
const url = "https://bmxcap.onrender.com/";

const state = {
    orders: null
}

const mutations = {
    setOrders(state, orders){
        state.orders = orders
    },
    setOrderDelete(state, data){
        state.orders = data
    }
}

const actions = {
    async fetchOrders({commit}){
        try {
            const userID = localStorage.getItem('userID')
            const { data } = await axios.get(`${url}orders/${userID}`);
            commit("setOrders", data.orders);
        } catch (error) {
            console.log(error);
        }
    },
    
    async deleteOrder({commit}, bmxID){
        try {
            const { data } = await axios.delete(`${url}order/${bmxID}`)
            commit('setOrderDelete', data)
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