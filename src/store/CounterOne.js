/**
 * Created by Administrator on 2017/1/19.
 */
export const CounterOne={
  state : {
  counter: 0,
  oddOrEven: '偶数'
},
   mutations : {
    increatment(state){
      state.counter = state.counter + 1;
    },
    discreament(state){
      state.counter = state.counter - 1;
    }
  },
  actions : {
  increatment: ({state,commit})=> {
    commit('increatment')
  },
  discreament: ({state,commit})=> {
    commit('discreament')
  },
  oddincreament: ({state,commit})=> {
    if ((state.counter + 1) % 2 === 0) {
      commit('increatment')
    }
  },
  asyncreament: ({state,commit})=> {
    setTimeout(()=> {
      commit('increatment')
    }, 3000)
  }
},
  getters : {
  counter(state){
    return state.counter;
  },
  oddOrEven(state){
    return (state.counter + 1) % 2 === 0 ? "Even" : "ODD";
  }
}
}
