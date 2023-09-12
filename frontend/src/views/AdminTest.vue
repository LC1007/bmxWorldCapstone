<template>
    <div class="container">
        <div class="d-flex justify-content-between my-5">
            <h1>Products</h1>
            <button class="btn btn-dark"><i class="bi bi-plus pe-2" style="font-size: 1rem"></i>Create Product</button>
        </div>
        <p>test</p>
        
        <div class="row">
            <div class="col" v-for="bike in bikes" :key="bike.bmxID">
                <div class="card custom-card h-100 w-100" style="width: 14rem;">
                    <img :src="bike.prodUrl" class="card-img-top custom-img" alt="...">
                    <div class="card-body">
                        <template v-if="bike.isEdit">
                            <input type="text" class="mb-2" v-model="bike.prodName">
                        </template>
                        <template v-else>
                            <h5 class="card-title">{{ bike.prodName }}</h5>
                        </template>
                        <!-- <template>
                    <p class="card-text">{{ bike.prodDesc }}</p>
                </template> -->

                        <!-- Textarea -->
                        <template v-if="bike.isEdit">
                            <textarea class="form-control w-100 mb-2" rows="10" cols="50"
                                v-model="bike.prodDesc"></textarea>
                        </template>

                        <!-- Amount -->
                        <template v-if="bike.isEdit">
                            <input type="text" class="mb-2" v-model="bike.amount">
                        </template>
                        <template v-else>
                            <h5 class="card-title">R{{ bike.amount }}</h5>
                        </template>

                        <!-- Category -->
                        <template v-if="bike.isEdit">
                            <input type="text" class="mb-5" v-model="bike.category">
                        </template>
                        <template v-else>
                            <h5 class="card-title mb-5">{{ bike.category }}</h5>
                        </template>

                        <div class="d-flex btns">
                            <template v-if="!bike.isEdit">
                                <button class="btn my-2 " @click="startEdit(bike)">
                                    <i class="bi bi-pencil pe-2"></i>Edit
                                </button>
                            </template>
                            <template v-else>
                                <button class="btn my-2" @click="saveEdit(bike)">
                                    <i class="bi bi-save2 pe-2"></i>Save
                                </button>
                                <button class="btn" @click="stopEdit(bike)">
                                    <i class="bi bi-x-circle pe-2"></i>Cancel
                                </button>
                            </template>
                            <template v-if="!bike.isEdit">
                                <button class="btn" @click="delProd(bike.bmxID)">
                                    <i class="bi bi-trash3 pe-2"></i>Delete
                                </button>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('products', ['bikes'])
    },
    mounted() {
        this.fetchBikes();
    },
    methods: {
        ...mapActions('products', ['fetchBikes', 'createProd']),

        startEdit(bike) {
            bike.isEdit = true
        },
        saveEdit(bike) {
            bike.isEdit = false
        },
        stopEdit(bike) {
            bike.isEdit = false
        },
    }
}
</script>

<style scoped>
.custom-img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

.custom-card{
    position: relative;
}
.btns{
    position: absolute;
    bottom: 0;
}
</style>