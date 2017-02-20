/**
 * Created by Administrator on 2017/1/24.
 */
import * as types from '../mutation-types';
import shop from '../Shop'
export const Products = {
  state: {
    all: [],
  },
  getters: {
    getAllProducts: (state)=>state.all,
},
mutations:{
  [types.RECEIVE_PRODUCTS](state,{products})
  {
    state.all = products;
  }
}
,
actions:{
  /*[types.RECEIVE_PRODUCTS]({commit})
  {
    commit([types.RECEIVE_PRODUCTS])
  }*/
  getAllProducts:({commit})=>{
    shop.getProducts(products=>{
      commit([types.RECEIVE_PRODUCTS],{products})
    })
  }

}

}
