import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ProductsScreen from './src/components/products/ProductsScreen';

import GlobalState from './src/context/GlobalState';

const App = () => {
  return (
    <SafeAreaProvider>
      <GlobalState>
        <ProductsScreen />
      </GlobalState>
    </SafeAreaProvider>
  );
};

export default App;
