/**
 * Created by Administrator on 2017/1/24.
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

const getProducts = (cb)=> {
  // setTimeout(()=>{cb(_products)},1000)
  cb(_products)
};

const buyProducts = (cb, err)=> {
  Math.random() > 0.5 ? cb() : err()
}

export default {
  getProducts,
  buyProducts
}
