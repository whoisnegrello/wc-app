import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ProductsScreen from "../components/products/ProductsScreen";

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
