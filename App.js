import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import ProductsStack from './src/stacks/ProductsStack';

import GlobalState from './src/context/GlobalState';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalState>
          <ProductsStack />
        </GlobalState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
