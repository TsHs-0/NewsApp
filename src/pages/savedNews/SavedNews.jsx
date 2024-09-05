import React from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {styles} from '../homePage/styles';
import {SavedNewsController} from './SavedNewsController';
import {EmptyListComponent} from '../../components/list/EmptyListComponent';
import {NO_DATA} from '../../utils/messages';

export const SavedNews = ({navigation}) => {
  const {data, loading, renderItem} = SavedNewsController(navigation);

  return (
    <View style={styles.mainView}>
      <FlashList
        data={data}
        estimatedItemSize={150}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderItem(item)}
        ListEmptyComponent={<EmptyListComponent text={NO_DATA} />}
      />
    </View>
  );
};
