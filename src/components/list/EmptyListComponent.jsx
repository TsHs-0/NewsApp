import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const EmptyListComponent = ({text}) => {
  return (
    <View style={styles.emptyListView}>
      <Text style={styles.emptyListText}>{text}</Text>
    </View>
  );
};
