import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getArticleImage, getNews} from '../../utils/rest';
import {MAIN} from '../../utils/constants';
import {saveArticleToTheStorage} from '../../utils/asyncStorage';
import {toastMessages} from '../../utils/toast';

export const NewsReadPageController = () => {
  const routes = useRoute();
  const navigation = useNavigation();

  const [body, setBody] = useState({});
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [fromStorage, setFromStorage] = useState(false);

  const getArticle = async id => {
    const res = await getNews({id});
    if (res.done) {
      setBody({
        id: res?.data?.response?.content?.id,
        ...res?.data?.response?.content?.fields,
      });
      setLoading(false);
    } else {
      navigation.navigate(MAIN);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (routes.params?.fromStorage) {
      setFromStorage(true);
      setBody(routes.params?.item);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } else {
      getArticle(routes.params?.id);
    }
  }, [routes.params?.id]);

  const onSavePress = async () => {
    setSaveLoading(true);
    const imagePath = await getArticleImage({url: body.thumbnail});
    if (imagePath) {
      await saveArticleToTheStorage({
        item: {
          id: body.id,
          headline: body?.headline,
          thumbnail: 'file://' + imagePath,
          lastModified: body.lastModified,
          byline: body?.byline,
          body: body?.body,
        },
      })
        .then(() => toastMessages.success_storage_save())
        .catch(() => toastMessages.error_storage_save())
        .finally(() => {
          setSaveLoading(false);
        });
    } else {
      toastMessages.error_storage_save();
    }
  };

  return {body, fromStorage, loading, saveLoading, onSavePress};
};
