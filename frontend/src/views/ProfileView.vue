<template>
    <div>
        <Navbar />

        

        <!-- <div v-if="user">
            <h2>{{ user.firstName }}</h2>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div> -->

        <div class="container mb-5">
            <div class="row" v-if="user">
                <div class="d-flex align-items-center justify-content-center">
                <h1 class="text-center my-5">Profile</h1>
                <router-link to="/admin" class="btn btn-dark mx-3">Admin</router-link>
            </div>
                <div class="col h-100">
                    <img :src="user.profileUrl" class="w-50"
                        alt="">
                </div>
                <div class="col h-100">
                    <h4>Name:</h4>
                    <template v-if="user.isEdit">
                        <input type="text" class="my-2 form-control" v-model="user.firstName" name="" id="">
                    </template>
                    <template v-else>
                        <p>{{ user.firstName }}</p>
                    </template>
                    <h4>Surname:</h4>
                    <template v-if="user.isEdit">
                            <input type="text" class="my-2 form-control" v-model="user.lastName" name="" id="">
                        </template>
                        <template v-else>
                            <p>{{ user.lastName }}</p>
                        </template>
                    <h4>Email:</h4>
                    <template v-if="user.isEdit">
                            <input type="text" class="my-2 form-control" v-model="user.emailAdd" name="" id="">
                        </template>
                        <template v-else>
                            <p>{{ user.emailAdd }}</p>
                        </template>
                        <h4>Gender:</h4>
                    <template v-if="user.isEdit">
                            <input type="text" class="my-2 form-control" v-model="user.gender" name="" id="">
                        </template>
                        <template v-else>
                            <p>{{ user.gender }}</p>
                        </template>
                    <h4>Profile Image:</h4>
                    <template v-if="user.isEdit">
                            <input type="text" class="my-2 form-control" v-model="user.profileUrl" name="" id="">
                        </template>
                        <template v-else>
                            <p>{{ user.profileUrl }}</p>
                        </template>

                        <template v-if="user.isEdit">
                            <!-- <h4>Password</h4>
                            <input type="text" class="form-control" v-model="user.userPass"> -->
                            <button class="btn" @click="btnPassword(user)">Reset Password?</button>

                            <template v-if="user.showPassword">
                                <input type="text" class="form-control" name="" id="">
                            </template>
                        </template>
                    <template v-if="!user.isEdit">
                        <div>
                            <button class="btn my-2 " @click="startEdit(user)">
                                <i class="bi bi-pencil pe-2"></i>Edit
                            </button>
                        </div>
                    </template>
                    <template v-else>
                        <div class="">
                            <button class="btn my-2" @click="saveEdit(user)">
                                <i class="bi bi-save2 pe-2"></i>Save
                            </button>
                            <button class="btn" @click="stopEdit(user)">
                                <i class="bi bi-x-circle pe-2"></i>Cancel
                            </button>
                        </div>
                    </template>
                    <!-- <template v-if="!bike.isEdit">
                        <button class="btn" @click="delProd(user.bmxID)" style="color: red">
                            <i class="bi bi-trash3 pe-2" style="color: red"></i>Delete
                        </button>
                    </template> -->
                </div>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/TestNav.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState('usermodule', ['user'])
    },
    methods: {
        ...mapActions('usermodule', ['fetchUser']),
        startEdit(user) {
            user.isEdit = true
        },
        async saveEdit(user){
            try {
                const { isEdit, ...updateData } = user
                await this
                user.isEdit = false
            } catch (error) {
                
            }
        },
        stopEdit(user){
            user.isEdit = false
            user.showPassword = false
        },
        btnPassword(user){
            user.showPassword = true
        }
    },
    created() {
        const userID = localStorage.getItem('userID')

        if (userID) {
            this.fetchUser(userID)
        }
    }
}
</script>

<style scoped></style>