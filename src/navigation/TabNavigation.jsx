import React from 'react';
import {HOME, SAVED_NEWS} from '../utils/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TAB_SCREENS, tabScreenOptions} from './navigationOptions';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {internetAvailable} = useSelector(state => state.index);
  return (
    <Tab.Navigator
      initialRouteName={internetAvailable ? HOME : SAVED_NEWS}
      screenOptions={props => tabScreenOptions(props)}>
      {TAB_SCREENS.map(({name, component}) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};
