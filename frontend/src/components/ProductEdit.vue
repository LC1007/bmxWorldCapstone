<template>
    <div>
        <Navbar />
        <div class="container">
            <h1 class="text-center my-5">Edit Product</h1>
            <form @submit.prevent="createProdForm">
                <div v-if="selectedBikeEdit">

                    <div class="mb-3">
                        <label for="productName" class="form-label">BMX Name</label>
                        <input type="text" v-model="selectedBikeEdit.prodName" class="form-control" id="productName"
                            name="productName">
                    </div>
                    <div class="mb-3">
                        <label for="productDesc" class="form-label">BMX Descripion</label>
                        <textarea name="productDesc" v-model="selectedBikeEdit.prodDesc" class="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="quantity" class="form-label">Quantity</label>
                        <input type="number" v-model="selectedBikeEdit.quantity" class="form-control" name="quantity">
                    </div>
                    <div class="mb-3">
                        <label for="amount" class="form-label">Amount</label>
                        <input type="number" v-model="selectedBikeEdit.amount" class="form-control" name="amount">
                    </div>
                    <div class="mb-3">
                        <label for="category" class="form-label">Category</label>
                        <input type="text" class="form-control" v-model="selectedBikeEdit.category">
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Image</label>
                        <input type="url" v-model="selectedBikeEdit.prodUrl" class="form-control" id="image">
                    </div>
                    <router-link to="/admin" class="btn btn-dark my-3">Cancel</router-link>
                    <button type="submit" class="btn btn-dark my-3 ms-3" @click="saveEdit(selectedBikeEdit)">Update</button>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex'
import sweet from 'sweetalert'

export default {
    data() {
        return {
            populatedData(selectedBikeEdit) {
                this.selectedBikeEdit = {
                    prodName: selectedBikeEdit?.prodName || '',
                    prodDesc: selectedBikeEdit?.prodDesc || '',
                    quantity: selectedBikeEdit?.quantity || '',
                    amount: selectedBikeEdit?.amount || '',
                    category: selectedBikeEdit?.category || '',
                    prodUrl: selectedBikeEdit?.prodUrl || ''
                }
            }
        }
    },
    computed: {
        ...mapState('products', ['selectedBikeEdit', 'bikeID'])
    },
    components: {
        Navbar
    },
    methods: {
        ...mapActions('products', ['fetchBike', 'updateBike']),
        async saveEdit(bike) {
            try {
                await this.updateBike(bike)
                sweet({
                    title: 'Product',
                    text: 'Product Updated',
                    icon: 'success',
                    timer: 4000
                })
            } catch (error) {
                console.error('Error updating bike:', error);
                console.log('Product:', bike);
            }
        }
    },
    mounted() {

    },
    async created() {
        const bmxID = this.$route.params.bmxID
        await this.fetchBike(bmxID)
    },
}
</script>

<style scoped>
input, textarea {
  border: 2px solid black;
  border-radius: 4px;
}
</style>