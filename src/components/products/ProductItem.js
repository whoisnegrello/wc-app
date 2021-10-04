import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import {colors} from '../../resources/constants';
import config from '../../resources/config';
import Context from '../../context/Context';

import addIcon from '../../assets/images/product/add-to-cart-icon.png';
import removeIcon from '../../assets/images/product/remove-from-cart-icon.png';

const ProductItem = props => {
  const {item, navigation} = props;
  const {id, name, price, images} = item;
  const {cart, thisProductIsInCart, deleteProduct, addProduct} =
    useContext(Context);
  const [productBtnIcon, setProductBtnIcon] = useState();

  const handlerPressProductBtn = () => {
    if (thisProductIsInCart(id)) {
      deleteProduct(id);
    } else {
      addProduct(item);
    }
  };

  useEffect(() => {
    if (thisProductIsInCart(id)) {
      setProductBtnIcon(removeIcon);
    } else {
      setProductBtnIcon(addIcon);
    }
  }, [cart]);

  return (
    <View key={id} style={styles.itemContainer}>
      <Pressable
        onPress={() => navigation.navigate('Product Details', {product: item})}>
        <Image
          resizeMode="cover"
          style={styles.itemImage}
          source={{
            uri: images[0].src,
            headers: {
              Authorization: config.liveLinkCredentials,
            },
          }}
        />
      </Pressable>
      <View style={styles.itemData}>
        <View style={styles.itemMeta}>
          <Text style={styles.itemPrice}>{`$ ${price}`}</Text>
          <Text style={styles.itemTitle}>{name}</Text>
        </View>
        <Pressable onPress={handlerPressProductBtn}>
          <Image style={styles.productBtn} source={productBtnIcon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width / 2,
    padding: 8,
    alignContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  itemData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMeta: {
    width: '70%',
  },
  itemTitle: {
    color: colors.darkGrey,
    fontWeight: '300',
  },
  itemPrice: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  itemBtn: {
    width: '25%',
  },
  productBtn: {
    width: 30,
    height: 30,
  },
});

export default ProductItem;
