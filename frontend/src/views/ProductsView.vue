<template>
    <div>
        <Navbar />
        <div class="d-flex d-sm-flex justify-content-between align-items-center">
            <h1 class="m-5">PRODUCTS</h1>
            <div class="me-5 d-flex w-25">
                <button class="btn btn-dark h-100 w-100 me-2" @click="sortBikes('amount')">Sort By Name</button>
                <button class="btn btn-dark h-100 w-100 me-2" @click="sortBikes('prodName')">Sort By Price</button>
            </div>
        </div>
        <div class="container">
            <div class="row">
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
        </div>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex'

const { cookies } = useCookies();
export default {
    components: {
        Navbar
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
                    return this.sortOrder === 'asc' ? a.prodName.localeCompare(b.prodName) : b.prodName.localeCompare(a.prodName)
                }

                return 0
            }

            return [...this.bikes].sort(sortingFunc)
        }
    },
    methods: {
        ...mapActions('products', ['fetchBikes', 'searchProds', 'addProductToCart']),
        sortBikes(){
            const option = this.sortOption === 'amount' ? 'prodName' : 'amount'
            this.$store.commit('products/setSortOption', option)
        },

        addProd(bike){
            const cookieToken = cookies.get('loggedInUser')
            if(cookieToken){
                const loggedInUserID = this.userID 
                console.log(`order/${loggedInUserID}/${bike}`);
                this.addProductToCart({loggedInUserID, bmxID: bike})
            }
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
</style>