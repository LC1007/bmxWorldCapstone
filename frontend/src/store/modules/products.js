import axios from "axios"
const url = "https://bmx.onrender.com/";

const state = {
    bikes: null
}

const mutations = {
    setBikes(state, updatedBike){
        state.bikes = updatedBike
    }
}

const actions = {
    async fetchBikes({commit}){
        try {
            const { data } = await axios.get(`${url}products`)
            commit('setBikes', data.results)
        } catch (error) {
            console.log('There was an error trying to fetch products');
        }
    }
}

export default {
    state,
    mutations,
    actions
}
