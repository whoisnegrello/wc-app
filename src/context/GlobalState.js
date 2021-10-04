import React, {useEffect, useState} from 'react';

import Context from './Context';
import config from '../resources/config';
import apiFetch from '../resources/apiFetch';

const GlobalState = props => {
  const [products, setProducts] = useState([]);

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

  return (
    <Context.Provider
      value={{
        products,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
