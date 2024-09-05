import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {NEWS_READ_PAGE} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {toastMessages} from '../../utils/toast';
import {useDispatch, useSelector} from 'react-redux';
import {getArticles} from './HomeModel';
import {addLoading} from '../../redux/slices/homeSlice';

export const HomePageController = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [isMasonry, setIsMasonry] = useState(false);
  const {contentData, currentPage, loading, keyword} = useSelector(
    state => state.home,
  );
  const {internetAvailable} = useSelector(state => state.index);

  const getContent = useCallback(
    async page => {
      await dispatch(getArticles({page, keyword})).then(res => {
        if (!res) {
          if (page > 1) {
            toastMessages.error_load_more_articles();
          } else {
            toastMessages.error_load_content();
          }
        }
      });
    },
    [keyword],
  );

  useEffect(() => {
    dispatch(addLoading(true));
    getContent(1).finally(() => {
      dispatch(addLoading(false));
    });
  }, []);

  const onOpenHandle = useCallback(id => {
    navigation.navigate(NEWS_READ_PAGE, {id});
  }, []);

  const onEndReached = useCallback(async () => {
    if (!loadMore) {
      setLoadMore(true);
      const nextPage = currentPage + 1;
      await getContent(nextPage);
      setLoadMore(false);
    }
  }, [loadMore, currentPage]);

  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await getContent(1);
    setRefresh(false);
  }, []);

  const listFooterComponent = useCallback(
    () => (loadMore ? <ActivityIndicator size="small" /> : null),
    [loadMore],
  );

  const onListVewChange = useCallback(() => {
    setIsMasonry(!isMasonry);
  }, [isMasonry]);

  return {
    data: contentData,
    refresh,
    loading,
    isMasonry,
    internetAvailable,
    onRefresh,
    onEndReached,
    onOpenHandle,
    onListVewChange,
    listFooterComponent,
  };
};
