import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Dimensions, Platform, Text, FlatList} from 'react-native';

import Context from '../../context/Context';
import {sizes} from '../../resources/constants';

const ProductsScreen = props => {
  const {products} = useContext(Context);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={products}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - 30 - 50
        : Dimensions.get('window').height - sizes.headerHeight - 30,
  },
});

export default ProductsScreen;