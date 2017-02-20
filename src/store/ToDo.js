/**
 * Created by Administrator on 2017/1/20.
 */

export const STORAGE_KEY="todo-vuejs";
export const ToDo = {

  state: {
    // arrList: [{text: "d", done: false}, {text: "e", done: false}, {text: "ee", done: false}]
    arrList: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations: {
    toggleAll(state, {done}){
      state.arrList.map((t)=>t.done = done)
    },
    toggleCheck(state, todo){
      todo.done = !todo.done;
      // console.log(`${state.arrList.every((t)=>t.done)}`)
    },
    destroy(state, todo){
      const record = state.arrList.findIndex((ele)=> {
        return ele.text == todo.text;
      });
      state.arrList.splice(record, 1)
    },
    insertValue(state,e){
      const text=e.target.value;
      if(text.trim()){
        state.arrList.push({text:text,done:false});
      }
      e.target.value="";
      console.log(state.arrList)
    },
    clearCompleted(state){
      state.arrList=state.arrList.filter((t)=>!t.done)
    }

  },
  actions: {
    toggleAll({commit}, done){
      commit("toggleAll", done)
    },
    toggleCheck({commit}, todo){
      commit("toggleCheck", todo);
    },
    destroy({commit}, todo){
      commit("destroy", todo);
    },
    insertValue({commit},e){
      commit("insertValue",e)
    },
    clearCompleted({commit}){
      commit('clearCompleted')
    }
    /*clearCompleted({commit}){
      commit("clearCompleted")
    }*/
  },
  getters: {
    toDos(state){
      return state.arrList;
    },
    allChecked(state){
      return state.arrList.every((t)=>t.done);
    },
  }
}
