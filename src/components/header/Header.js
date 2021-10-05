import React, {useContext, useEffect, useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

import Context from '../../context/Context';

import {sizes} from '../../resources/constants';
import logo from '../../assets/images/header/logo.png';
import cartIcon from '../../assets/images/header/cart-icon.png';
import cartWithProductsBtnIcon from '../../assets/images/header/cart-with-products-icon.png';
import goBackBtn from '../../assets/images/header/go-back-icon.png';

const Header = props => {
  const {route, navigation} = props;
  const isProductsScreen = route.name === 'Products';
  const {cart} = useContext(Context);
  const [cartBtnIcon, setCartBtnIcon] = useState();

  useEffect(() => {
    if (cart.length > 0) {
      setCartBtnIcon(cartWithProductsBtnIcon);
    } else {
      setCartBtnIcon(cartIcon);
    }
  }, [cart]);

  return (
    <View style={styles.container}>
      {!isProductsScreen && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={goBackBtn} />
        </Pressable>
      )}
      <Image style={styles.logo} source={logo} />
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Image style={styles.cartBtn} source={cartBtnIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizes.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  arrowIcon: {
    width: 25,
    height: 21,
  },
  logo: {
    width: 96,
    height: 17,
  },
  cartBtn: {
    width: 25,
    height: 25,
  },
});

export default Header;
