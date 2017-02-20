import Vue from 'vue';
import Vuex from 'vuex';
import {CounterOne} from './CounterOne'
import {CounterTwo} from './CounterTwo'
import {hotCounter} from './hotCounter'
import {ToDo} from './ToDo'
import Plugins from './Plugins'
import {Products} from './modules/Products'
import {Cart} from './modules/Cart'
import * as types from './mutation-types';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    totalCount: 0,
  },
  getters: {
    totalCount(state, modules){
      // return state.totalCount;
      return CounterOne.state.counter + CounterTwo.state.countertwo;
    },
    cartProducts: (state)=> {
      return Cart.state.addProducts.map(({id, quantity})=> {
        const product = Products.state.all.find((p)=>p.id == id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      })
    },
    cartTotal: (state)=> {
       const priceTotal=Cart.state.addProducts.map(({id, quantity})=> {
        const product = Products.state.all.find((p)=>p.id == id);
        return product.price*quantity;
      }).reduce((x, y)=> {
        return x+ y;
      },0)
      return priceTotal.toFixed(2)
    }
  },
  mutations: {
    [types.ADD_TO_CART](state, {id}){
      const record = Cart.state.addProducts.find((p)=>p.id == id);
      Products.state.all.find((p)=>p.id == id).inventory--;
      if (!record) {
        Cart.state.addProducts.push({id, quantity: 1});
      }
      else {
        record.quantity++;
      }

    },
  },
  actions: {
    addToCart({commit}, product){
      commit([types.ADD_TO_CART], {id: product.id});
    }
  },
  modules: {
    moduleCounter: CounterOne,
    moduleCounter2: CounterTwo,
    hotCounter,
    Products,
    Cart,
    ToDo
  },
  Plugins
});
export default store;
