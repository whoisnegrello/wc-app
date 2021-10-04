import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../components/products/ProductsScreen';
import ProductDetailsScreen from '../components/products/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
