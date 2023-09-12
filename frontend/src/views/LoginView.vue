<template>
    <div>
        <div class="container custom-container">
            <div class="row d-flex justify-content-center align-content-center">
                <div class="col-12 col-lg-6 col-md-4 d-flex flex-column justify-content-center">
                    <h1 class="text-center">Login</h1>
                    <form @submit.prevent="login">
                          <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="john@gmail.com" v-model="loginData.emailAdd">
                          </div> 
                          <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" v-model="loginData.userPass">
                          </div>
                          <p>Don't have an account? <router-link to="/signup">Create one</router-link></p>
                          <div class="d-flex justify-content-center">
                            <button class="btn btn-dark">Submit</button>
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
import { mapActions, mapMutations } from 'vuex'
import {useCookies} from 'vue3-cookies'
const { cookies } = useCookies()
    export default {
        data(){
            return{
                loginData:{
                    emailAdd: '',
                    userPass: ''
                }
            }
        },
        methods:{
            ...mapActions('usermodule', ['submitLogin', 'fetchUsers']),
            async login(){
                await this.submitLogin(this.loginData)
                cookies.get('loggedInUser');
            }
        },
        // beforeCreate(){
        //     this.$store.dispatch('fetchUsers')
        // },
        mounted(){
            cookies.get('loggedInUser');
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