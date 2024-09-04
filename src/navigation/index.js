import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyTheme} from '../utils/styles';
import {SCREENS} from './navigationOptions';
import {styles} from './styles';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <View style={styles.mainView}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {SCREENS.map(({name, component}) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </View>
  );
};
