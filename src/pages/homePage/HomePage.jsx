import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/header/Header';
import {styles} from './styles';
import {HomePageController} from './HomePageController';
import {Loader} from '../../components/loader/Loader';
import {EmptyListComponent} from '../../components/list/EmptyListComponent';
import {NO_DATA, NO_INTERNET} from '../../utils/messages';
import {ListView} from '../../components/list/ListView';
import {IconButton} from '../../components/buttons/IconButton';
import {gridIcon, listIcon} from '../../assets';

export const HomePage = () => {
  const {
    data,
    refresh,
    loading,
    isMasonry,
    internetAvailable,
    onRefresh,
    onOpenHandle,
    onEndReached,
    onListVewChange,
    listFooterComponent,
  } = HomePageController();

  return (
    <View style={styles.mainView}>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <IconButton
            iconSize={24}
            onPress={onListVewChange}
            style={styles.listViewButton}
            source={!isMasonry ? gridIcon : listIcon}
            disabled={!internetAvailable && !data.length}
          />
          <ListView
            data={data}
            masonry={isMasonry}
            refreshing={refresh}
            onEndReachedThreshold={0.7}
            showsVerticalScrollIndicator={false}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
            onOpenHandle={onOpenHandle}
            ListFooterComponent={listFooterComponent}
            ListEmptyComponent={
              <EmptyListComponent
                text={!internetAvailable ? NO_INTERNET : NO_DATA}
              />
            }
          />
        </>
      )}
    </View>
  );
};
