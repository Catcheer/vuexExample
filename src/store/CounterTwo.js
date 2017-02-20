/**
 * Created by Administrator on two017/1/19.
 */
export const CounterTwo = {
  state: {
    countertwo: 0,
  },
  mutations: {
    increatmenttwo(state){
      state.countertwo++;
    },
    discreamenttwo(state){
      state.countertwo--;
    },
  },
  actions: {
    increatmenttwo({commit}){
      commit("increatmenttwo")
    },
    discreamenttwo({commit}){
      commit("discreamenttwo")
    },
  },
  getters:{
    countertwo(state){
      return state.countertwo;
    }
  }

}
