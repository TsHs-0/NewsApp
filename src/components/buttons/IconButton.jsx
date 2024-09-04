import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {fillSizes} from '../../utils/styles';
import {Loader} from '../loader/Loader';

export const IconButton = ({
  source = '',
  iconSize = 20,
  tintColor = 'black',
  text = null,
  textStyle = {},
  onPress = () => {},
  style = {},
  loading = false,
}) => {
  return (
    <Pressable onPress={onPress} style={style}>
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

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
