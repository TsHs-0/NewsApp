import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {BLACK, fillSizes} from '../../utils/styles';
import {Loader} from '../loader/Loader';
import {styles} from './styles';

export const IconButton = ({
  style = {},
  text = null,
  source = '',
  iconSize = 20,
  textStyle = {},
  loading = false,
  disabled = false,
  tintColor = BLACK,
  onPress = () => {},
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{opacity: disabled ? 0.5 : 1, ...style}}>
      {loading ? (
        <Loader size="small" />
      ) : (
        <View style={styles.containerView}>
          <Image
            tintColor={tintColor}
            source={source}
            style={{...fillSizes(iconSize)}}
          />
          {text && <Text style={textStyle}>{text}</Text>}
        </View>
      )}
    </Pressable>
  );
};
