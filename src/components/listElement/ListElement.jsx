import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import {IconButton} from '../buttons/IconButton';
import {downloadIcon, emptyImage} from '../../assets';
import {getStringData} from '../../utils/functions';

export const ListElement = ({
  id = '',
  title = '',
  imageUri = '',
  date = '',
  onSave = () => {},
  onPress = () => {},
}) => {
  return (
    <Pressable onPress={() => onPress(id)}>
      <View style={styles.mainView}>
        <View style={styles.thumbnailImageView}>
          <Image
            source={imageUri ? {uri: imageUri} : emptyImage}
            style={styles.thumbnailImage}
          />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentDate}>{getStringData(date)}</Text>
          <Text numberOfLines={3} style={styles.contentTitle}>
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
