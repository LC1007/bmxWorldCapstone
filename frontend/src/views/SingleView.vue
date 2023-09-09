<template>
    <div>
        <Navbar />
        <div class="container">
            <nav aria-label="breadcrumb" class="m-5">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Neo Bmx 16"</li>
                </ol>
            </nav>
            <!-- <div class="row m-5">
                <div class="col-12 col-lg-6 col-md-6">
                    <img :src="selectedBike.prodUrl" class="custom-img" alt="">
                </div>
                <div class="col-12 col-lg-6 col-md-6 ps-5" v-if="selectedBike">
                    <h1>{{ selectedBike.prodName }}</h1>
                    <p>R{{ selectedBike.amount }}</p>
                    <p>{{ selectedBike.prodDesc }}</p>
                    <button class="btn btn-dark" @click="addToCart(selectedBike)">Add to cart</button>
                </div>
                <div v-else>
                    <p>loading...</p>
                </div>
            </div> -->
            <div class="d-sm-flex justify-content-center m-2 m-5 gap-3" v-if="selectedBike">
                <div>
                    <!-- <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" alt=""> -->
                    <img :src="selectedBike.prodUrl" class="custom-img pe-md-5" alt="">
                </div>
                <div class="w-75">
                    <h1>{{ selectedBike.prodName }}</h1>
                    <p>R{{ selectedBike.amount }}</p>
                    <p>{{ selectedBike.prodDesc }}</p>
                    <button class="btn btn-dark" @click="add">Add to cart</button>
                </div>
            </div>
            <div v-else>
                <p>loading...</p>
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
        ...mapState('products', ['selectedBike', 'bikeID']),
        ...mapState('usermodule', ['userID'])
    },
    async created() {
        const bmxID = this.$route.params.bmxID
        await this.fetchBike(bmxID)
    },
    methods: {
        ...mapActions('products', ['fetchBike', 'addToCart']),

        add(){
            const loggedInUserID = this.userID
            const bmxID = this.bikeID

            this.addToCart(loggedInUserID, bmxID)
            // console.log("This is coming from the singleview file: ",loggedInUserID);
            // console.log("Testing the bmxID: ",bmxID);
        },

    }
}
</script>

<style scoped>
.custom-img {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
}

.custom-img-small {
    width: 20%;
}

i {
    font-size: 2rem;
    cursor: pointer;
}
</style>