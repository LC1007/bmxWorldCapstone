<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100">
        <div class="container-fluid">
          <router-link to="/"><a class="navbar-brand" href="#">BMX <br> WORLD</a></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <router-link to=""><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                  <router-link to="/product" class="nav-link">Single Product</router-link>
                </li>
              <li class="nav-item" v-show="isAdmin">
                <router-link to="/admin" class="nav-link">Admin(DELETE LATER)</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <button @click="logout">Logout</button>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/signup" class="nav-link"><i class="bi bi-person-circle"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link"><i class="bi bi-basket"></i></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img
        src="https://images.unsplash.com/photo-1576282577948-50480284e7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        class="w-100" alt="">
      <!-- <video class="w-100" data-object-fit="cover" muted autoplay loop>
                  <source src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70" type="video/mp4">
       </video> -->
    </div>
  </template>
  
  <script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
  export default {
    computed:{
      user(){
        return this.$store.state.user || cookies.get('loggedInUser')
      },
      result(){
        return this.user?.result
      },
      isAdmin(){
        return this.result?.userRole?.toLowerCase() === 'admin'
      }
    },
    methods:{
      logout(){
        console.log(cookies.remove('loggedInUser'));
        location.reload()
      }
    }
  }
  </script>
  
<style scoped>
nav{
    z-index: 10;
}
</style>