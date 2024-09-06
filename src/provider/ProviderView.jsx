import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {styles} from './styles.js';
import {store} from '../redux/store/index.js';
import {Navigation} from '../navigation/NavigationContainer.jsx';

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainView}>
        <Navigation />
        <Toast />
      </View>
    </Provider>
  );
};
