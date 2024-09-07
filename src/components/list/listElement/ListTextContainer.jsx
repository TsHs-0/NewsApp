import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {IconButton} from '../../buttons/IconButton';
import {trashIcon} from '../../../assets';
import {getStringData} from '../../../utils/functions';
import {styles} from '../styles';
import {RED} from '../../../utils/styles';

export const ListTextContainer = memo(
  ({
    date = '',
    title = '',
    masonry = false,
    hasRemove = false,
    onPress = () => {},
  }) => (
    <View style={masonry ? styles.masonryContentView : styles.contentView}>
      <Text style={styles.contentDate}>{getStringData(date)}</Text>
      <Text numberOfLines={masonry ? 2 : 3} style={styles.contentTitle}>
        {title}
      </Text>
      {hasRemove && (
        <View style={styles.contentSaveButton}>
          <IconButton
            tintColor={RED}
            source={trashIcon}
            iconSize={24}
            onPress={onPress}
          />
        </View>
      )}
    </View>
  ),
);
