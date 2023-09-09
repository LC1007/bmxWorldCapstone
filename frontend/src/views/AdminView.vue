<template>
    <div>
        <Navbar />
        <h1 class="text-center m-5">ADMIN PAGE</h1>
        <div class="container">
            <!-- Button trigger modal -->
            <!-- <button type="button" class="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Product
            </button> -->

            <!-- Modal -->
            <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add A Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="createProdForm">
                                <div class="mb-3">
                                    <label for="productName" class="form-label">BMX Name</label>
                                    <input type="text" v-model="addProd.prodName" class="form-control" id="productName" name="productName">
                                </div>
                                <div class="mb-3">
                                    <label for="productDesc" class="form-label">BMX Descripion</label>
                                    <textarea name="productDesc" v-model="addProd.prodDesc" class="form-control" cols="30"
                                        rows="10"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="quantity" class="form-label">Quantity</label>
                                    <input type="number" v-model="addProd.quantity" class="form-control" name="quantity">
                                </div>
                                <div class="mb-3">
                                        <label for="amount" class="form-label">Amount</label>
                                        <input type="number" v-model="addProd.amount" class="form-control" name="amount">
                                    </div>
                                <div class="mb-3">
                                    <label for="category" class="form-label">Category</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">Street BMX</option>
                                        <option value="2">Vert BMX</option>
                                        <option value="3">Park BMX</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">Image</label>
                                    <input type="url" v-model="addProd.prodUrl" class="form-control" id="image">
                                </div>
                                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-dark">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="d-flex justify-content-between my-5">
                <h1>Products</h1>
                <button class="btn btn-dark"><i class="bi bi-plus pe-2" style="font-size: 1rem"></i>Create Product</button>
            </div>
                <!-- <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BMX Name</th>
                            <th>BMX Description</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bike in bikes" :key="bike.bmxID">
                            <td>{{ bike.bmxID }}</td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.prodName }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" v-model="bike.prodName" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.prodDesc }}</td>
                            </template>
                            <template v-else>
                                <textarea class="form-control w-100 h-100" id="exampleFormControlTextarea1" rows="10"
                                    cols="50" v-model="bike.prodDesc"></textarea>
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.quantity }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.quantity" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>R{{ bike.amount }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.amount" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.category }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.category" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                                    <img :src="bike.prodUrl" style="width: 10rem" alt="">
                                </template>
                                <template v-else>
                                    <input type="text" name="name" class="w-100" v-model="bike.prodUrl" id="">
                                </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                                    <button class="btn btn-dark my-2 " @click="startEdit(bike)">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-success my-2" @click="saveEdit(bike)">
                                        <i class="bi bi-save2"></i>
                                    </button>
                                    <button class="btn btn-danger" @click="stopEdit(bike)">
                                        <i class="bi bi-x-circle"></i>
                                    </button>
                                </template>
                                <template v-if="!bike.isEdit">
                                    <button class="btn btn-danger" @click="delProd(bike.bmxID)">
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table> -->

                <div class="row">
                <div class="col-12 col-lg-3 col-md-6 g-3" v-for="bike in bikes" :key="bike.bmxID">
                    <div class="card custom-card h-100 w-100" style="width: 14rem;">
                        <img :src="bike.prodUrl" class="card-img-top custom-img" alt="...">
                        <div class="card-body">
                            <template v-if="bike.isEdit">
                                <p>Product Name</p>
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
                                <p>Product Description</p>
                                <textarea class="form-control w-100 mb-2" rows="10" cols="50"
                                    v-model="bike.prodDesc"></textarea>
                            </template>

                            <!-- Amount -->
                            <template v-if="bike.isEdit">
                                <p>Product Amount</p>
                                <input type="text" class="mb-2" v-model="bike.amount">
                            </template>
                            <template v-else>
                                <h5 class="card-title">R{{ bike.amount }}</h5>
                            </template>

                            <!-- Category -->
                            <template v-if="bike.isEdit">
                                <p>Product Category</p>
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
        ...mapActions('products', ['fetchBikes', 'createProd']),
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