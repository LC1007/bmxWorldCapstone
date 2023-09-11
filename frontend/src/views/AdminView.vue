<template>
    <div>
        <Navbar />
        <h1 class="text-center m-5">ADMIN PAGE</h1>
        <div class="container">
            <div class="d-flex justify-content-between my-5">
                <h1>Products</h1>
                <router-link to="/createprod" class="btn btn-dark h-100"><i class="bi bi-plus pe-2" style="font-size: 1rem"></i>Create Product</router-link>
            </div>

                <div class="row">
                <div class="col-12 col-lg-3 col-md-6 g-3" v-for="bike in bikes" :key="bike.bmxID">
                    <div class="card custom-card h-100 w-100" style="width: 14rem;">
                        <div class="card-body">
                            <template v-if="bike.isEdit">
                                <p>Product Image</p>
                                <input type="text" class="form-control mb-2" v-model="bike.prodUrl">
                            </template>
                            <template v-else>
                                <img :src="bike.prodUrl" class="card-img-top custom-img" alt="...">
                            </template>
                            <template v-if="bike.isEdit">
                                <p>Product Name</p>
                                <input type="text" class="form-control mb-2" v-model="bike.prodName">
                            </template>
                            <template v-else>
                                <h5 class="card-title">{{ bike.prodName }}</h5>
                            </template>

                            <!-- Textarea -->
                            <template v-if="bike.isEdit">
                                <p>Product Description</p>
                                <textarea class="form-control w-100 mb-2" rows="10" cols="50"
                                    v-model="bike.prodDesc"></textarea>
                            </template>

                            <!-- Amount -->
                            <template v-if="bike.isEdit">
                                <p>Product Amount</p>
                                <input type="text" class="form-control mb-2" v-model="bike.amount">
                            </template>
                            <template v-else>
                                <h5 class="card-title">R{{ bike.amount }}</h5>
                            </template>

                            <!-- Category -->
                            <template v-if="bike.isEdit">
                                <p>Product Category</p>
                                <input type="text" class="form-control mb-5" v-model="bike.category">
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
                                    <button class="btn" @click="delProd(bike.bmxID)" style="color: red">
                                        <i class="bi bi-trash3 pe-2" style="color: red"></i>Delete
                                    </button>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <h1>Users</h1>
                <div class="table-responsive" v-if="bikes">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Email Address</th>
                                <th>Profile Url</th>
                                <th>User</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.userID">
                                <td>{{ user.userID }}</td>
                                <td>{{ user.firstName }}</td>
                                <td>{{ user.lastName }}</td>
                                <td>{{ user.gender }}</td>
                                <td>{{ user.userDOB }}</td>
                                <td>{{ user.emailAdd }}</td>
                                <td>{{ user.profileUrl }}</td>
                                <td>{{ user.userRole }}</td>
                                <td>
                                    <button class="btn btn-dark m-2">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button class="btn btn-danger">
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p>loading</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex'

export default {
    data(){
        return{
            addProd:{
                prodName: '',
                prodDesc: '',
                quantity: '',
                amount: '',
                prodUrl: ''
            }
        }
    },
    components: {
        Navbar
    },
    computed: {
        ...mapState('products', ['bikes']),
        ...mapState('usermodule', ['users'])
    },
    mounted() {
        this.fetchBikes();
        this.fetchUsers();
    },
    methods: {
        ...mapActions('products', ['fetchBikes', 'createProd', 'updateBike']),
        ...mapActions('usermodule', ['fetchUsers']),

        startEdit(bike) {
            bike.isEdit = true
        },
        saveEdit(bike) {
            bike.isEdit = false
        },
        stopEdit(bike) {
            bike.isEdit = false
        },

        async saveEdit(bike){
            try {
                const { isEdit, ...updateProd } = bike
                await this.updateBike(updateProd)
                bike.isEdit = false
            } catch (error) {
                console.error('Error updating bike:', error);
                console.log('Product:', bike);
            }
        },

        createProdForm(){
            try {
                this.createProd(this.addProd)

                this.resetForms()
            } catch (error) {
                console.log("Something went wrong ", error);
            }
        },

        resetForms(){
            this.addProd.prodName = '',
            this.addProd.prodDesc = '',
            this.addProd.quantity = '',
            this.addProd.amount = '',
            this.addProd.prodUrl = ''
        },

        async saveEdit(bike) {
            try {
                const { isEdit, ...updateProd } = bike
                await this.updateBike(updateProd)
                bike.isEdit = false
            } catch (error) {
                console.error('Error updating board in component:', error);
                console.log('Product:', bike);
            }
        },
        delProd(bike) {
            try {
                this.deleteProd(bike)
            } catch (error) {

            }
        }
    }
}
</script>

<style scoped>
.custom-img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
}

.custom-card{
    position: relative;
}
.btns{
    position: absolute;
    bottom: 0;
}
</style>