import React from 'react';
import {Image, View} from 'react-native';
import {emptyImage} from '../../assets';
import {styles} from './styles';

export const LayeredImage = ({
  size = 200,
  source = '',
  backSource = '',
  frontSource = '',
  backImageBlurRadius = 3,
}) => {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={backSource || source || emptyImage}
        style={{...styles.imageBack, height: size}}
        blurRadius={backImageBlurRadius}
      />
      <Image
        resizeMode="contain"
        source={frontSource || source || emptyImage}
        style={{height: size, ...styles.imageFront}}
      />
    </View>
  );
};
