import React, {memo} from 'react';
import {View, Pressable} from 'react-native';
import {ListElementController} from './ListElementController';
import {ListTextContainer} from './ListTextContainer';
import {ListThumbnailImage} from './ListThumbnailImage';

export const ListElement = memo(
  ({
    id = '',
    date = '',
    title = '',
    imageUri = '',
    masonry = false,
    hasRemove = false,
    onDelete = () => {},
    onPress = () => {},
  }) => {
    const {mainViewStyles, onLoad} = ListElementController({masonry});

    return (
      <Pressable onPress={() => onPress(id)}>
        <View style={mainViewStyles}>
          <ListThumbnailImage
            imageUri={imageUri}
            masonry={masonry}
            onLoad={onLoad}
          />
          <ListTextContainer
            date={date}
            title={title}
            masonry={masonry}
            hasRemove={hasRemove}
            onPress={() => onDelete(id)}
          />
        </View>
      </Pressable>
    );
  },
);
