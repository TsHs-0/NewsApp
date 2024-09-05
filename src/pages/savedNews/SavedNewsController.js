import {useCallback, useEffect, useState} from 'react';
import {
  getArticlesFromStorage,
  saveArticleToTheStorage,
} from '../../utils/asyncStorage';
import {ListElement} from '../../components/list/ListElement';
import {NEWS_READ_PAGE} from '../../utils/constants';
import {toastMessages} from '../../utils/toast';
import {useIsFocused} from '@react-navigation/native';

export const SavedNewsController = navigation => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getStoredData();
    }
  }, [isFocused]);

  const getStoredData = useCallback(async () => {
    setLoading(true);
    await getArticlesFromStorage()
      .then(result => {
        setData(result);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const removeArticleFromStorage = useCallback(
    async id => {
      const result = data.filter(e => e.id != id);
      setData(result);
      await saveArticleToTheStorage({all: result}).then(res => {
        if (!res) {
          toastMessages.error_storage_save();
        }
      });
    },
    [data],
  );

  const onPressElement = useCallback(item => {
    navigation.navigate(NEWS_READ_PAGE, {
      fromStorage: true,
      id: item.id,
      item: item,
    });
  }, []);

  const renderItem = useCallback(
    item => (
      <ListElement
        hasRemove
        id={item.id}
        title={item.headline}
        date={item.lastModified}
        imageUri={item.thumbnail}
        onDelete={removeArticleFromStorage}
        onPress={() => onPressElement(item)}
      />
    ),
    [data],
  );

  return {data, loading, renderItem};
};
