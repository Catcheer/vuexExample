<template>
  <div>
    <h2>products</h2>
    <ul>
      <li class="products_list" v-for='p in Products'>
        {{p.title}} - {{p.price}}
        <br/>
        <button :disabled="!p.inventory" @click="addToCart(p)">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default{
    data(){
      return {}
    },
    components: {},
    computed: mapGetters({Products: 'getAllProducts'}),
//    methonds:mapActions({addToCart:"addToCart"}),
    methods: {
      addToCart(p){
        this.$store.dispatch('addToCart', p);
      }
    },
    created(){
      this.$store.dispatch('getAllProducts');
    }
  }
</script>
