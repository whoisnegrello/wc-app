import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import Context from '../../context/Context';
import config from '../../resources/config';
import {colors} from '../../resources/constants';

const ProductInCart = ({item}) => {
  const {deleteProduct} = useContext(Context);
  const {id, images, name, price} = item;

  return (
    <View key={id} style={styles.container}>
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
      <Text style={styles.itemTitle}>{name}</Text>
      <Text style={styles.itemPrice}>$ {price}</Text>
      <Pressable
        style={styles.itemRemoveContainer}
        onPress={() => deleteProduct(id)}>
        <Text style={styles.itemRemove}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemImage: {
    width: (Dimensions.get('window').width / 100) * 15,
    height: (Dimensions.get('window').width / 100) * 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemTitle: {
    width: (Dimensions.get('window').width / 100) * 45,
    marginHorizontal: (Dimensions.get('window').width / 100) * 5,
    fontWeight: '300',
  },
  itemPrice: {
    width: (Dimensions.get('window').width / 100) * 15,
    fontWeight: 'bold',
  },
  itemRemoveContainer: {
    width: (Dimensions.get('window').width / 100) * 5,
  },
  itemRemove: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductInCart;
