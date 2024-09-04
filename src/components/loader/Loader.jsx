import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import {fillSizes} from '../../utils/styles';

export const Loader = ({
  size = 'large',
  text = null,
  style = {},
  loaderContentSize = '100%',
}) => {
  return (
    <View
      style={{...styles.loaderView, ...fillSizes(loaderContentSize), ...style}}>
      <ActivityIndicator size={size} />
      {text && <Text style={styles.loaderText}>{text}</Text>}
    </View>
  );
};
