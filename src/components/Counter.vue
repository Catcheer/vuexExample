<template>
  <div>
    <h1>{{title}}</h1>
    <div>当前总数是{{totalCount}}</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>numone : {{counter}} 是{{oddOrEven}}数</div>
    <button @click="increatment">+</button>
    <button @click="discreament">-</button>
    <button @click="oddincreament">oddincreament</button>
    <button @click="asyncreament">asyncreament</button>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div>numtwo : {{countertwo}}</div>
    <button @click="increatmenttwo">+</button>
    <button @click="discreamenttwo">-</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'app',
    data(){
      return {
        title: this.$route.name,
      }
    },
    methods: mapActions(['increatment', 'discreament', 'oddincreament', 'asyncreament', 'increatmenttwo', 'discreamenttwo']),
    computed: mapGetters(['counter', 'oddOrEven', 'totalCount', 'countertwo'])
  }
</script>
