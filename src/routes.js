/**
 * Created by Administrator on 2017/1/19.
 */

import Counter from './components/Counter.vue'
import HotCounter from './components/HotCounter.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ToDos from './components/ToDos.vue'
import Nav from './components/Nav.vue'

export const routes=[
  {path:'/',component:Nav,name:"Nav"},
  {path:'/counter',component:Counter,name:"Counter"},
  {path:'/hotcounter',component:HotCounter,name:"HotCounter"},
  {path:'/shoppingcart',component:ShoppingCart,name:"ShoppingCart"},
  {path:'/todos',component:ToDos,name:"ToDos"},
];
