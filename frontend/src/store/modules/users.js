import axios from "axios"
const url = "https://bmx.onrender.com/";

// export const users = {
//     namespaced: true,
//     state: {
//         users: null,
//         user: null
//     },
    
//     mutations: {
//         setUsers(state, users){
//             state.users = users
//         }
//     },
    
//     actions: {    
//         async fetchUsers({commit}){
//             try {
//                 const { data } = await axios.get(`${url}users`)
//                 commit('setUsers', data.results)
//             } catch (error) {
//                 console.log('There was an error trying to fetch users');
//             }
//         }
//     }
// }

const state = {
    users: null
}

const mutations = {
    setUsers(state, users){
        state.users = users
    }
}

const actions = {
    async fetchUsers({commit}){
        try {
            const { data } = await axios.get(`${url}users`)
            commit('setUsers', data.results)
        } catch (error) {
            console.log('There was an error trying to fetch users');
        }
    }
}

export default {
    state,
    mutations,
    actions
}
