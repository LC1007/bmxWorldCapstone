<template>
    <div>
        <Navbar />
        <h1 class="text-center m-5">PRODUCTS</h1>
        <div class="container">
            <div class="row">
                <div class="col mb-5 d-flex" v-for="bike in bikes" :key="bike.bmxID">
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
        ...mapState('products', ['bikes'])
    },
    methods: {
        ...mapActions('products', ['fetchBikes'])
    },
    mounted() {
        this.fetchBikes()
    }
}
</script>

<style scoped>
img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
}
</style>