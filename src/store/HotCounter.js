/**
 * Created by Administrator on 2017/1/20.
 */
export const hotCounter = {
  state: {
    counter: 0,
    events: []
  },
  mutations: {
    hotIncrement(state){
      state.counter++;
      state.events.push('hotIncrement')
    },
    hotDiscrement(state){
      state.counter--
      state.events.push('hotDiscrement')
    }
  },
  actions: {
    hotIncrement({state, commit}){
      commit('hotIncrement')
    },
    hotDiscrement({state, commit}){
      commit('hotDiscrement')
    }
  },
  getters: {
    hotCounter(state){
      return state.counter;
    },
    events(state){
      var limt = 5, end = state.events.length;
      var start = end - limt < 0 ? 0 : end - limt;
      // console.log(`start:${start} end:${end} slice:${state.events.slice(start,end)}`)
       return state.events.slice(start,end).join(" | ");
    }
  }
}
