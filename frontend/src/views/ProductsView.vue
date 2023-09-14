<template>
    <div>
        <Navbar />
        <!-- <button class="btn btn-dark" @click="comp = 'AllProducts'">All Products</button>
        <button class="btn btn-dark" @click="comp = 'Frames'">Frames</button>
        <button class="btn btn-dark" @click="comp = 'Bars'">Bars</button> -->
        <select v-model="comp" class="form-control">
          <option value="AllProducts">All Products</option>
          <option value="Frames">Frames</option>
          <option value="Bars">Bars</option>
          <option value="Bikes">Bikes</option>
        </select>
        <component :is="comp"/>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import Navbar from '@/components/TestNav.vue'
import { mapActions, mapState } from 'vuex'
import { Form, Field, ErrorMessage } from 'vee-validate';
import AllProducts from '@/components/ProductFiltering/AllProductsComp.vue'
import Frames from '@/components/ProductFiltering/FramesComp.vue'
import Bars from '@/components/ProductFiltering/HandlebarsComp.vue'
import Bikes from '@/components/ProductFiltering/BikesComp.vue'

const { cookies } = useCookies();
export default {
    components: {
        Navbar,
        Form,
        Field,
        ErrorMessage,
        AllProducts,
        Frames,
        Bars,
        Bikes
    },
    data(){
        return{
            comp: "AllProducts"
        }
    }
}
</script>

<style scoped>

</style>