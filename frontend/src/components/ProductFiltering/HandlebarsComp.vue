<template>
    <div>
        <div class="container" style="height: 100vh">
            <h1>Frames</h1>
            <div class="row">
                <div class="col" v-for="bike in filteredBikes" :key="bike.bmxID">
                    <div class="card border-0 m-auto" style="width: 18rem;">
                        <img :src="bike.prodUrl" class="card-img-top pb-2 rounded-0" alt="...">
                        <div class="card-body p-0">
                            <h5 class="fw-normal">{{ bike.prodName }}</h5>
                            <p>R{{ bike.amount }}</p>
                            <button class="btn btn-dark" @click="addProd(bike.bmxID)"><i class="bi bi-cart"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('products', ['bikes']),

        filteredBikes() {
            const categoryToShow = 'handlebars'
            return this.bikes.filter((bike) => bike.category === categoryToShow)
        }
    }
}
</script>

<style scoped></style>