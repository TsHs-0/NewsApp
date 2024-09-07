import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SCREENS} from './navigationOptions';
import {setInternetAvailable} from '../redux/slices/indexSlice';
import {toastMessages} from '../utils/toast';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setInternetAvailable(state.isConnected));
      if (!state.isConnected) {
        toastMessages.error_connection();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {SCREENS.map(({name, component}) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
