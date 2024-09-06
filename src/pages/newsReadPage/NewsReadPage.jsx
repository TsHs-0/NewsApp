import React from 'react';
import {View} from 'react-native';
import {Loader} from '../../components/loader/Loader';
import {ButtonsView} from '../../components/newsReadPage/ButtonsView';
import {ContentView} from '../../components/newsReadPage/ContentView';
import {styles} from './styles';
import {NewsReadPageController} from './NewsReadPageController';

export const NewsReadPage = () => {
  const {body, loading, fromStorage, saveLoading, onSavePress} =
    NewsReadPageController();
  return (
    <View style={styles.mainView}>
      <ButtonsView
        showSaveButton={!fromStorage && !loading}
        saveLoading={saveLoading}
        onSavePress={onSavePress}
      />
      {loading ? (
        <Loader text={'Loading Article'} />
      ) : (
        <ContentView
          headline={body?.headline}
          image={body.thumbnail}
          date={body?.lastModified}
          author={body?.byline}
          body={body?.body}
        />
      )}
    </View>
  );
};
