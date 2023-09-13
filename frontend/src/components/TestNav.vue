<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand fw-bold"><img style="width: 3rem" src="https://i.postimg.cc/kM6vxp3s/pngegg-1.png" alt=""></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/products" class="nav-link">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link">About Us</router-link>
                  </li>
                <li class="nav-item">
                    <router-link to="/events" class="nav-link">Events</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin" v-if="isAdmin" class="nav-link">Admin</router-link>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/signup" class="nav-link" v-if="!hasCookie">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                      <button class="btn nav-link pe-3 me-lg-2" v-if="!hasCookie">Login</button>
                    </li>
                    <div class="d-sm-flex d-lg-flex align-items-lg-center align-items-sm-start">
                        <li class="nav-item">
                            <router-link to="/login" v-if="hasCookie" class="nav-link pe-2 ">Logout</router-link>
                          </li>
                        <li class="nav-item">
                            <router-link to="/cart" class="nav-link" v-if="hasCookie"><i class="bi bi-bag-fill pe-2"></i></router-link>
                          </li>
                        <div class="d-sm-flex d-lg-flex flex-sm-column flex-lg-column align-items-center pt-2">
                            <li class="nav-item" v-if="user">
                                <router-link to="/profile" class="nav-link p-0" v-if="hasCookie">
                                    <img :src=user.profileUrl style="width: 2rem" alt="">
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="user">
                                <p class="nav-link p-0">Welcome, {{ user.firstName }}</p>
                              </li>
                        </div>
                    </div>
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
import { mapActions, mapState } from 'vuex'
const { cookies } = useCookies()
  export default {
    computed:{
      user(){
        return this.$store.state.usermodule.user || cookies.get('loggedInUser')
      },
      isAdmin(){
        return this.user?.userRole?.toLowerCase() === 'admin'
      },
      hasCookie(){
        return cookies.get('loggedInUser') !== null
      }
    },
    methods:{
      ...mapActions('usermodule',['fetchUser']),
      logout(){
        cookies.remove('loggedInUser');
        localStorage.removeItem('userID')
        location.reload()
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

<style scoped>
nav{
    z-index: 10;
}
</style>