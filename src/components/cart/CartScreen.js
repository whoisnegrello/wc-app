import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Platform,
  Dimensions,
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
} from 'react-native';

import Header from '../header/Header';
import ProductInCart from './ProductInCart';

import {sizes, colors} from '../../resources/constants';
import Context from '../../context/Context';

const CartScreen = props => {
  const {cart, cartPrice} = useContext(Context);

  return (
    <SafeAreaView>
      <Header {...props} />
      <FlatList
        style={styles.productsContainer}
        data={cart}
        renderItem={({item}) => <ProductInCart item={item} {...props} />}
      />
      <View style={styles.resumeContainer}>
        <Text style={styles.resumeText}>Total</Text>
        <Text style={styles.resumePrice}>$ {cartPrice}</Text>
      </View>
      <Pressable
        disabled={!(cart.length > 0)}
        style={styles.buttonCheckout}
        onPress={() => props.navigation.navigate('Checkout')}>
        <Text style={styles.textCheckout}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - 160 - 50
        : Dimensions.get('window').height - sizes.headerHeight - 160,
  },
  resumeContainer: {
    height: sizes.ctaButton,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  resumeText: {
    color: colors.darkGrey,
  },
  resumePrice: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  buttonCheckout: {
    height: sizes.ctaButton,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  textCheckout: {
    color: colors.lightGrey,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
