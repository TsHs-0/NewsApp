import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/header/Header';
import {FlashList} from '@shopify/flash-list';
import {styles} from './styles';
import {HomePageController} from './HomePageController';

export const HomePage = () => {
  const {
    data,
    refresh,
    renderItem,
    onEndReached,
    onRefresh,
    listFooterComponent,
  } = HomePageController();

  return (
    <View style={styles.mainView}>
      <Header />
      <FlashList
        data={data}
        refreshing={refresh}
        estimatedItemSize={100}
        onEndReachedThreshold={0.7}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={({item}) => renderItem(item)}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
};
