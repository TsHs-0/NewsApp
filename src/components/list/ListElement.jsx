import React, {memo, useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {IconButton} from '../buttons/IconButton';
import {emptyImage, trashIcon} from '../../assets';
import {getStringData} from '../../utils/functions';
import {styles} from './styles';

export const ListElement = memo(
  ({
    id = '',
    title = '',
    imageUri = '',
    date = '',
    hasRemove = false,
    onDelete = () => {},
    onPress = () => {},
    masonry = false,
  }) => {
    const [imageHeight, setImageHeight] = useState(200);

    const onLoad = ({nativeEvent}) => {
      const {height} = nativeEvent.source;
      setImageHeight(height);
    };

    return (
      <Pressable onPress={() => onPress(id)}>
        <View
          style={
            masonry
              ? {
                  height: imageHeight,
                  ...styles.masonryMainView,
                }
              : styles.mainView
          }>
          <View style={masonry ? {} : styles.thumbnailImageView}>
            <Image
              style={styles.thumbnailImage}
              onLoad={event => onLoad(event)}
              source={imageUri ? {uri: imageUri} : emptyImage}
            />
          </View>

          <View
            style={masonry ? styles.masonryContentView : styles.contentView}>
            <Text style={styles.contentDate}>{getStringData(date)}</Text>
            <Text numberOfLines={2} style={styles.contentTitle}>
              {title}
            </Text>
            {hasRemove && (
              <View style={styles.contentSaveButton}>
                <IconButton
                  tintColor={masonry ? 'red' : 'gray'}
                  source={trashIcon}
                  iconSize={24}
                  onPress={() => onDelete(id)}
                />
              </View>
            )}
          </View>
        </View>
      </Pressable>
    );
  },
);
