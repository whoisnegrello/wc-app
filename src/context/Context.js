import {createContext} from 'react';

const context = createContext({
  products: [],
  cart: [],
  addProduct: product => {},
  deleteProduct: productId => {},
  cartPrice: 0,
  updateCartPrice: () => {},
});

export default context;
