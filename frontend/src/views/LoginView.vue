<template>
    <div>
        <div class="container custom-container">
            <div class="row d-flex justify-content-center align-content-center">
                <div class="col-12 col-lg-6 col-md-4 d-flex flex-column justify-content-center">
                    <h1 class="text-center">Login</h1>
                    <form action="">
                          <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="john@gmail.com">
                          </div>
                          <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1">
                          </div>
                          <div class="d-flex justify-content-center">
                            <router-link to="/"><button class="btn btn-dark">Submit</button></router-link>
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
    export default {
        
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