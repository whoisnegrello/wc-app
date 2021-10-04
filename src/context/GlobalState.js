import React, {useEffect, useState} from 'react';

import Context from './Context';
import config from '../resources/config';
import apiFetch from '../resources/apiFetch';

const GlobalState = props => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  const addProduct = product => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const deleteProduct = productId => {
    const position = cart.findIndex(product => product.id === productId);

    if (position >= o) {
      const newCart = [...cart];
      newCart.splice(position, 1);
      setCart(newCart);
    }
  };

  const updateCartPrice = () => {
    let newCartPrice = 0;
    cart.map(
      product => (newCartPrice = newCartPrice + parseFloat(product.price)),
    );
    setCartPrice(newCartPrice);
  };

  const fetchProducts = async () => {
    const newProducts = await apiFetch.get(
      `${config.siteUrl}products?${config.wcCredentials}`,
    );
    console.log(newProducts);
    setProducts(newProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    updateCartPrice();
  }, [cart]);

  return (
    <Context.Provider
      value={{
        products,
        cart,
        setCart,
        addProduct,
        deleteProduct,
        cartPrice,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
