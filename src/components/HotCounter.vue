<template>
    <div>
      <div>{{hotCounter}}</div>
      <button @click="hotIncrement">hotIncrement</button>
      <button @click="hotDiscrement">hotDiscrement</button>
      <div>最近5次的事件: {{events}}</div>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
      methods:mapActions(['hotIncrement','hotDiscrement']),
      computed:mapGetters(['hotCounter','events'])
    }
</script>
