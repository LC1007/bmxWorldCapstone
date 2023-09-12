<template>
    <div>
        <!-- Edit button -->
        <div v-for="bike in bikes" :key="bike.bmxID">

            <p>{{ bike.prodName }}</p>
            <button @click="openEditModal(bike)">Edit</button>
        </div>

        <!-- ...other content... -->

        <!-- Modal component -->
        <ProductEditModal :bike="selectedProduct" :showModal="showEditModal" @close="closeEditModal" />
    </div>
</template>

<script>
import ProductEditModal from '@/components/ProductEdit.vue';

export default {
    data() {
        return {
            selectedProduct: null, // To store the selected product
            showEditModal: true // To control the visibility of the modal
        };
    },
    computed:{
        bikes(){
            return this.$store.state.products.bikes
        }
    },
    methods: {
        openEditModal(bike) {
            console.log('Button clicked');
            this.selectedProduct = bike; // Set the selected product
            this.showEditModal = false; // Show the modal
        },
        closeEditModal() {
            this.selectedProduct = null; // Clear the selected product
            this.showEditModal = true; // Hide the modal
        }
    },
    mounted(){
        this.$store.dispatch('products/fetchBikes')
    },
    components: {
        ProductEditModal
    }
};
</script>
