<template>
  <div>
    <Navbar/>
    <h1>This is an about page</h1>
    <ProductList />
  </div>
</template>

<script>
import Navbar from '@/components/TestNav.vue'
import ProductList from '@/components/ProductCategoryComp.vue'
import { mapActions } from 'vuex'
export default{
  components:{
    Navbar,
    ProductList
  },
  methods:{
    ...mapActions('products', ['fetchBikes'])
  },
  created(){
    this.fetchBikes()
  }
}
</script>
