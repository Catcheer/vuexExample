/**
 * Created by Administrator on 2017/1/24.
 */
/**
 * Created by Administrator on 2017/1/24.
 */
import * as types from '../mutation-types';
import shop from '../Shop'
export const Cart = {
  state: {
    addProducts: [],
    checkOutState: null,
  },
  getters: {
    // cartProducts: (state)=>state.addProducts,
    checkOutState: (state)=>state.checkOutState,

  },
  mutations: {
    [types.CHECKOUT_REQUEST](state){
      state.addProducts=[];
      state.checkOutState=null;
    },
    [types.CHECKOUT_SUCCESS]:(state)=>state.checkOutState="succsess",
    [types.CHECKOUT_FAILURE]:(state,{saveCartItems})=>{
      state.checkOutState="fail";
      state.addProducts=saveCartItems;
    },
  }
  ,
  actions: {
    checkOut: ({commit,state})=> {
      const saveCartItems=[...state.addProducts];
      commit([types.CHECKOUT_REQUEST]);
      shop.buyProducts(()=>commit([types.CHECKOUT_SUCCESS]), ()=>commit([types.CHECKOUT_FAILURE],{saveCartItems}))
    }
  }

}
