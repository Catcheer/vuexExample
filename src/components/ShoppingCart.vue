<template>
    <div>
      <h1>ShoppingCart</h1>
      <hr/>
    <Products></Products>
      <hr/>
      <Cart></Cart>
    </div>
</template>

<script>
  import Cart from './Cart.vue'
  import Products from './Products.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
          Cart,
          Products
        }
    }
</script>
