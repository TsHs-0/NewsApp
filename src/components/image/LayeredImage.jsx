import React from 'react';
import {Image, View} from 'react-native';
import {emptyImage} from '../../assets';
import {fillSizes} from '../../utils/styles';

export const LayeredImage = ({
  source = '',
  backSource = '',
  frontSource = '',
  backImageBlurRadius = 3,
  size = 200,
}) => {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={backSource || source || emptyImage}
        style={{...fillSizes(size)}}
        blurRadius={backImageBlurRadius}
      />
      <Image
        resizeMode="contain"
        source={frontSource || source || emptyImage}
        style={{
          ...fillSizes(size),
          position: 'absolute',
        }}
      />
    </View>
  );
};
