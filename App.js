import React from 'react';
import {Text, View} from 'react-native';

import GlobalState from './src/context/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <View>
        <Text>Hola Mundo!</Text>
      </View>
    </GlobalState>
  );
};

export default App;
