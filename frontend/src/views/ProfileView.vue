<template>
    <div>
        <Navbar />

        <h1 class="text-center my-5">Profile</h1>

        <!-- <div v-if="user">
            <h2>{{ user.firstName }}</h2>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div> -->

        <div class="container mb-5">
            <div class="row" v-if="user">
                <div class="col h-100">
                    <img src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png" class="w-50"
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
                    <h4>Profile Image:</h4>
                    <template v-if="user.isEdit">
                            <input type="text" class="my-2 form-control" v-model="user.profileUrl" name="" id="">
                        </template>
                        <template v-else>
                            <p>{{ user.profileUrl }}</p>
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
import Navbar from '@/components/NavbarComp.vue'
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
        saveEdit(user){
            user.isEdit = false
        },
        stopEdit(user){
            user.isEdit = false
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