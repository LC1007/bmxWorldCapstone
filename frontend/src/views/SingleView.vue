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
            <div class="row m-5">
                <div class="col-12 col-lg-6 col-md-6">
                    <img :src="selectedBike.prodUrl" class="custom-img" alt="">
                    <!-- <div class="d-flex justify-content-center">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-caret-left"></i>
                        </div>
                        <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="custom-img-small m-2"
                            alt="">
                        <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="custom-img-small m-2"
                            alt="">
                        <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="custom-img-small m-2"
                            alt="">
                        <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="custom-img-small m-2"
                            alt="">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-caret-right"></i>
                        </div>
                    </div> -->
                </div>
                <div class="col-12 col-lg-6 col-md-6 ps-5" v-if="selectedBike">
                    <h1>{{ selectedBike.prodName }}</h1>
                    <p>{{ selectedBike.amount }}</p>
                    <p>{{ selectedBike.prodDesc }}</p>
                    <button class="btn btn-dark">Add to cart</button>
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
    computed:{
        ...mapState(['selectedBike'])
    },
    created(){
        const bmxID = this.$route.params.bmxID
        this.fetchBike(bmxID)
    },
    methods:{
        ...mapActions(['fetchBike'])
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
}</style>