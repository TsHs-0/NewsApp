import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {getStringData} from '../../utils/functions';

export const AdditionalInfo = memo(({author = '', date = ''}) => {
  return (
    <View style={styles.additionalInfoView}>
      <Text style={styles.additionalInfoElement}>Author(s): {author}</Text>
      <Text style={styles.additionalInfoElement}>
        Date: {getStringData(date)}
      </Text>
    </View>
  );
});
