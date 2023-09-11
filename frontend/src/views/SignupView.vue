<template>
    <div>
        <div class="container custom-container">
            <div class="row d-flex justify-content-center align-content-center">
                <div class="col-12 col-lg-6 col-md-4">
                    <h1 class="text-center">Sign Up</h1>
                    <form @submit.prevent="createUser">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="John" v-model="formData.firstName">
                          </div>
                          <div class="mb-3">
                            <label for="surname" class="form-label">Surname</label>
                            <input type="text" class="form-control" placeholder="Doe" v-model="formData.lastName">
                          </div>
                          <div class="mb-3">
                            <label for="gender" class="form-label">Gender</label>
                            <input type="text" class="form-control" placeholder="Doe" v-model="formData.gender">
                          </div>
                          <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input type="text" class="form-control" placeholder="yyyy-mm-dd" v-model="formData.userDOB">
                          </div>
                          <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="john@gmail.com" v-model="formData.emailAdd">
                          </div>
                          <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" v-model="formData.userPass">
                          </div>
                          <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-dark">Submit</button>
                          </div>
                    </form>
                </div>
                <div class="col-12 col-lg-6 col-md-4">
                    <video width="100%" class="w-100" data-object-fit="cover" muted autoplay loop>
                        <source src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70">
                      </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data(){
            return{
                formData:{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    userDOB: '',
                    emailAdd: '',
                    userPass: '',
                    profileUrl: ''
                }
            }
        },
        methods:{
            ...mapActions('usermodule',['submitSignup']),
            async createUser(){
            await this.submitSignup(this.formData)
        }
        }
    }
</script>

<style scoped>

.custom-container{
    display: grid;
    place-content: center;
    height: 100vh;
}

video{
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

</style>