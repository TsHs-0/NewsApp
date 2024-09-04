import React from 'react';
import {HOME} from '../utils/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {TAB_SCREENS, tabScreenOptions} from './navigationOptions';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={props => tabScreenOptions(props, colors)}>
      {TAB_SCREENS.map(({name, component}) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};
