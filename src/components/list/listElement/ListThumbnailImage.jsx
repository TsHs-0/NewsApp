import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {emptyImage} from '../../../assets';
import {styles} from '../styles';

export const ListThumbnailImage = memo(
  ({imageUri = '', masonry = false, onLoad = () => {}}) => (
    <View style={masonry ? {} : styles.thumbnailImageView}>
      <Image
        style={styles.thumbnailImage}
        onLoad={event => onLoad(event)}
        source={imageUri ? {uri: imageUri} : emptyImage}
      />
    </View>
  ),
);
