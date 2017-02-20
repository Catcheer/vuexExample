<template>
  <div>
    <section class="todo_wrap">
      <header>
        <h1>todos</h1>
        <input class="new_todo" autofocus autocomplete="off" type="text" placeholder="what needs to be done?" value=""
               @keyup.enter="insertValue"/>
      </header>
      <div class="todo_main">
        <input v-show="toDos.length" class="toggle_all" type='checkbox' :checked="allChecked"
               @change="toggleAll({done:!allChecked})"/>
        <ul class="todo_list">
          <todolist v-for='p in flitersToDos' :todo="p"></todolist>
        </ul>
      </div>
      <div class="todo_footer" v-show="toDos.length" @click.prevent="">
        <span class="todo_count">
          {{remaining}}  {{ remaining | pluralize('item') }}  left
        </span>
        <ul class="filters">
          <li v-for="(val,key) in filters">
            <router-link :class="{selected:visibility===key}" :to="'#/'+key" @click.native.prevent="visibility=key">
              {{key | capitalize }}
            </router-link>
          </li>
          <!-- <li>
             <router-link to='#/Active'>Active</router-link>
           </li>
           <li>
             <router-link to='#/Completed'>Completed</router-link>
           </li>-->
        </ul>
        <span v-show="flitersToDos.length-remaining>0" class="clear_completed" @click="clearCompleted">
          Clear completed
        </span>
      </div>
    </section>
  </div>
</template>

<script>
  import ToDoList from './ToDoList.vue'
  import {mapGetters} from  'vuex'
  import {mapActions} from 'vuex'

  const filters = {
    all: todos=>todos,
    active: todos=>todos.filter((t)=>!t.done),
    completed: todos=>todos.filter((t)=>t.done),
  }
  export default{
    data(){
      return {
        visibility: 'all',
//        filters:{all:"all",active:"active",completed:"completed"}
        filters: filters,

      }
    },
    components: {
      todolist: ToDoList,
    },
    computed: {
      ...mapGetters(["toDos", "allChecked"]),
      flitersToDos(){
        return filters[this.visibility](this.toDos)
      },
      remaining(){
        return this.toDos.filter((t)=>!t.done).length
      },

    },
    methods: {
      ...mapActions(['toggleAll','clearCompleted']),
      insertValue(e){
        this.$store.dispatch("insertValue", e)
      },
      /*clearCompleted(){
        debugger;
       this.toDos=this.toDos.filters(t=>t.done)
      }*/
      /*changeVisibility(key){
       this.visibility=key;
       console.log(this.visibility)
       }*/
    },
    filters: {
      capitalize(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
      pluralize(n, w){
        return n === 1 ? w : (w + "s");
      }

    },


  }
</script>
