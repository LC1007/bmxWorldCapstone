<template>
    <div>
        <Navbar />


        <div class="container mt-5">
            <h1>Cart</h1>
            <div class="row">
                <div class="col w-100 d-flex mb-2">
                    <!-- <div class="card" style="width: 18rem;">
                        <img :src="items.prodUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">{{ items.prodName }}</p>
                            <p class="card-text">R{{ items.amount }}</p>
                        </div>
                    </div> -->
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items in orders" :key="items.bmxID">
                                <td>
                                    <img :src="items.prodUrl" class="rounded" style="width: 5rem" alt="">
                                </td>
                                <td>{{ items.prodName }}</td>
                                <td>R{{ items.amount }}</td>
                                <td><i class="bi bi-trash3"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col bg-dark rounded p-2 ms-3">
                    <h5 class="text-white text-center">Payment Info</h5>
                    <div class="container">
                        <p class="text-white">Payment method:</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-dark me-5" style="border: 1px solid #fff; border-radius: 50px;"><i
                                    class="bi bi-credit-card-2-back-fill pe-2" style="font-size: 1rem;"></i>Credit
                                Card</button>
                            <button class="btn btn-dark" style="border: 1px solid #fff; border-radius: 50px;"><i
                                    class="bi bi-paypal pe-2" style="font-size: 1rem;"></i>Paypal</button>
                        </div>
                        <hr class="text-white">
                        <p class="text-white">Name on card:</p>
                        <input type="text" class="form-control" placeholder="John Doe" name="" id="">
                        <hr class="text-white">
                        <p class="text-white">Card Number:</p>
                        <input type="text" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" name="" id="">
                        <hr class="text-white">
                        <p class="text-white">Expiration Date:</p>
                        <div class="d-flex mb-4">
                            <div class="d-flex flex-column">
                                <input type="text" class="form-control w-75" placeholder="MM" name="" id="">
                            </div>
                            <div class="d-flex flex-column">
                                <input type="text" class="form-control w-75" placeholder="YYYY" name="" id="">
                            </div>
                            <div class="d-flex flex-column">
                                <input type="text" class="form-control w-75" placeholder="CVV" name="" id="">
                            </div>
                        </div>
                        <button class="btn btn-light">Complete payment<i class="bi bi-arrow-right ps-2" style="font-size: 1rem;"></i></button>
                    </div>
                </div>
            </div>
            <router-link to="/products" class="btn btn-dark my-5"><i class="bi bi-arrow-left pe-2"
                    style="font-size: 1rem;"></i>Continue Shopping</router-link>
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
        ...mapState('orders', ['orders'])
    },
    methods: {
        ...mapActions('orders', ['fetchOrders'])
    },
    mounted() {
        this.fetchOrders()
    }
}
</script>

<style scoped>

i {
    font-size: 2rem;
    cursor: pointer;
}
</style>