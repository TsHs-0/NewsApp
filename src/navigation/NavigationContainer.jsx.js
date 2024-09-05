import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyTheme} from '../utils/styles';
import {SCREENS} from './navigationOptions';
import {useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {setInternetAvailable} from '../redux/slices/indexSlice';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setInternetAvailable(state.isConnected));
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {SCREENS.map(({name, component}) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
