<template>
    <div>
        <Navbar />
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="m-5">PRODUCTS</h1>
            <div class="me-5 d-flex">
                <input type="text" class="form-control p-2 w-100 h-100 me-2" placeholder="search product">
                <button class="btn btn-dark h-100 w-100 me-2" @click="sortBikes('amount')">Sort By Name</button>
                <button class="btn btn-dark h-100 w-100 me-2" @click="sortBikes('prodName')">Sort By Price</button>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!-- <div class="col mb-5 d-flex" v-for="bike in bikes" :key="bike.bmxID">
                    <div class="card border-0 m-auto" style="width: 18rem;">
                        <img :src="bike.prodUrl" class="card-img-top pb-2 rounded-0" alt="...">
                        <div class="card-body p-0">
                            <h5 class="fw-normal">{{ bike.prodName }}</h5>
                            <p>R{{ bike.amount }}</p>
                            <button class="btn btn-dark"><i class="bi bi-cart"></i></button>
                        </div>
                    </div>
                </div> -->
                <div class="col mb-5 d-flex" v-for="bike in sortedBikes" :key="bike.bmxID">
                        <div class="card border-0 m-auto" style="width: 18rem;">
                            <img :src="bike.prodUrl" class="card-img-top pb-2 rounded-0" alt="...">
                            <div class="card-body p-0">
                                <h5 class="fw-normal">{{ bike.prodName }}</h5>
                                <p>R{{ bike.amount }}</p>
                                <button class="btn btn-dark"><i class="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState('products', ['bikes', 'sortOrder', 'sortOption']),
        // sortedBikes(){
        //     const sorted = [...this.bikes]

        //     if(this.sortOrder === 'asc'){
        //         sorted.sort((a, b) => a.amount - b.amount)
        //     } else if(this.sortOrder === 'desc'){
        //         sorted.sort((a, b) => b.amount - a.amount)
        //     }

        //     return sorted
        // }

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
        ...mapActions('products', ['fetchBikes']),
        sortBikes(){
            const option = this.sortOption === 'amount' ? 'prodName' : 'amount'
            this.$store.commit('products/setSortOption', option)
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