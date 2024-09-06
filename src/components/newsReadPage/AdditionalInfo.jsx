import React, {memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {getStringData} from '../../utils/functions';

export const AdditionalInfo = memo(({author = '', date = ''}) => {
  const data = useMemo(
    () => [
      {start: 'Author(s): ', info: author},
      {start: 'Date: ', info: getStringData(date)},
    ],
    [author, date, getStringData],
  );

  return (
    <View style={styles.additionalInfoView}>
      {data.map(item => (
        <Text key={item.start} style={styles.additionalInfoElement}>
          {item.start + item.info}
        </Text>
      ))}
    </View>
  );
});
