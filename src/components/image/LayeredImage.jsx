import React from 'react';
import {Image, View} from 'react-native';
import {emptyImage} from '../../assets';

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
        style={{width: '100%', height: size}}
        blurRadius={backImageBlurRadius}
      />
      <Image
        resizeMode="contain"
        source={frontSource || source || emptyImage}
        style={{
          height: size,
          width: '100%',
          position: 'absolute',
        }}
        onLoad={event => console.log(event.nativeEvent)}
      />
    </View>
  );
};
