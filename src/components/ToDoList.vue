<template>
  <li :class="{completed:todo.done}">
    <div class="view">
      <input class="toggle" :checked="todo.done" type='checkbox' @click="toggleCheck(todo)"/>
      <label>{{todo.text}}</label>
      <button class="destroy" @click="destroy(todo)"></button>
    </div>
    <input class="edit" type="text" value="e"/>
  </li>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return {}
    },
    components: {},
    props: ['todo'],
    methods: {
      ...mapMutations(["toggleCheck","destroy"]),
      // toggleCheck(todo){
      // todo.done=!todo.done;
      //},
    }
  }
</script>
