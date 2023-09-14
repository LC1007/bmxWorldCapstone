<template>
    <div>
        <Navbar />
        <div class="d-flex d-sm-flex justify-content-between align-items-center">
            <h1 class="m-5">PRODUCTS</h1>
            <div class="me-5 d-flex w-50">
                <div class="custom-group">
                    <form @submit.prevent="searchForm">
                        <input type="text" class="form-control h-100 me-2 custom-input" v-model="searchQuery" placeholder="BMX">
                        <div v-if="message">
                            <p>{{ message }}</p>
                        </div>
                        <button class="btn">Search</button>
                    </form>
                    <i class="bi bi-x-circle custom-icon" @click="clear"></i>
                </div>
                <button class="btn btn-dark w-100 h-100 me-2" @click="sortBikes('prodName')">Sort By Name</button>
                <button class="btn btn-dark w-100 h-100 me-2" @click="sortBikes('amount')">Sort By Price</button>
                <div v-if="notFoundMsg">
                    {{ notFoundMsg }}
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-if="sortedBikes.length">
                <div class="col mb-5 d-flex" v-for="bike in sortedBikes" :key="bike.bmxID">
                        <div class="card border-0 m-auto" style="width: 18rem;">
                            <img :src="bike.prodUrl" class="card-img-top pb-2 rounded-0" alt="...">
                            <div class="card-body p-0">
                                <h5 class="fw-normal">{{ bike.prodName }}</h5>
                                <p>R{{ bike.amount }}</p>
                                <button class="btn btn-dark" @click="addProd(bike.bmxID)"><i class="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
            <div  v-else>
                <div class="d-flex justify-content-center w-100 mb-5">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import Navbar from '@/components/TestNav.vue'
import { mapActions, mapState } from 'vuex'
import { Form, Field, ErrorMessage  } from 'vee-validate';

const { cookies } = useCookies();
export default {
    components: {
        Navbar,
        Form,
        Field,
        ErrorMessage
    },
    data(){
        return{
            searchTerm:{
                prodName: ''
            }
        }
    },
    computed: {
        ...mapState('products', ['bikes', 'sortOrder', 'sortOption']),
        ...mapState('usermodule', ['userID']),
        sortedBikes(){
            const sortingFunc = (a, b) =>{
                if(this.sortOption === 'amount'){
                    return this.sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount
                } else if(this.sortOption === 'prodName'){
                    return this.sortOrder === 'asc' ? 
                    a.prodName.localeCompare(b.prodName) : 
                    b.prodName.localeCompare(a.prodName)
                }

                return 0
            }

            return [...this.bikes].sort(sortingFunc)
        }
    },
    methods: {
        ...mapActions('products', ['fetchBikes', 'addProductToCart', 'searchProd']),

        sortBikes(){
            const option = this.sortOption === 'amount' ? 'prodName' : 'amount'
            this.$store.commit('products/setSortOption', option)
        },

        addProd(bike){
            const cookieToken = cookies.get('loggedInUser')
            if(cookieToken){
                const loggedInUserID = this.userID 
                this.addProductToCart({loggedInUserID, bmxID: bike})
            }
        },

        searchForm(){
            if(!this.searchQuery === null){
                const message = 'Invalid'
                return message
            } else if(this.searchQuery){
                this.searchProd(this.searchQuery)
            }
        },

        clear(){
            this.searchQuery = ''
            this.fetchBikes()
        }
    },
    mounted() {
        this.fetchBikes()
    }
}
</script>

<style scoped>
img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    width: 100%;
}

.custom-group{
    width: 50rem;
    position: relative;
    margin-right: 1rem;
}

.custom-input{
     margin: 0px;
        padding-right: 1rem;
        width: 100%;
        outline: none;
        height: 30px;
        border-radius: 5px;
}

.custom-icon{
     position: absolute;
        top: 0;
        border-radius: 5px;
        right: 9px;
        z-index: 2;
        border: none;
        top: 6px;
        height: 30px;
        cursor: pointer;
        color: #000;
        transform: translateX(2px);
}
</style>