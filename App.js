import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Home} from './src/Home/Home';
import {store} from './src/Redux/Redux';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.view}>
        <Home />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
