<template>
<div>
 <h2>cart</h2>
  <p v-show="!Products.length">please add products to your cart</p>
  <ul>
    <li class="products_list" v-for="p in Products">
     <div> {{p.title}} - {{p.price}} * {{p.quantity}}</div>
    </li>
  </ul>
  <div>
    <button @click='checkOut'>checkout</button>
    <p>cart total:${{cartTotal}}</p>
    <p>{{checkOutState}}</p>
  </div>
</div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
  export default{
    data(){
        return{

      }
    },
    components:{
    },
    computed:mapGetters({Products:"cartProducts",checkOutState:'checkOutState',cartTotal:"cartTotal"}),
    methods:mapActions(['checkOut'])
  }
</script>
