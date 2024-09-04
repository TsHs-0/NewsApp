import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getNews} from '../../utils/rest';
import {MAIN} from '../../utils/constants';
import {Loader} from '../../components/loader/Loader';
import {ButtonsView} from './ButtonsView';
import {ContentView} from './ContentView';
import {styles} from './styles';
import {saveArticleToTheStorage} from '../../utils/asyncStorage';
import {ERROR, showToast, SUCCESS, toastMessages} from '../../utils/toast';

export const NewsReadPage = () => {
  const routes = useRoute();
  const navigation = useNavigation();

  const [body, setBody] = useState({});
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const getArticle = async id => {
    const res = await getNews({id});
    if (res.done) {
      setBody({...res?.data?.response?.content?.fields});
      setLoading(false);
    } else {
      navigation.navigate(MAIN);
    }
  };

  useEffect(() => {
    setLoading(true);
    getArticle(routes.params?.id);
  }, [routes.params?.id]);

  const onSavePress = async () => {
    setSaveLoading(true);
    await saveArticleToTheStorage({
      id: body.id,
      headline: body?.headline,
      image: body.thumbnail,
      lastModified: body.lastModified,
      byline: body?.byline,
      body: body?.body,
    })
      .then(() => toastMessages.success())
      .catch(() => toastMessages.error())
      .finally(() => {
        setSaveLoading(false);
      });
  };

  return (
    <View style={styles.mainView}>
      <ButtonsView saveLoading={saveLoading} onSavePress={onSavePress} />
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
