import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ListElement} from '../../components/listElement/ListElement';
import {getNews} from '../../utils/rest';
import {NEWS_READ_PAGE} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

export const HomePageController = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const fetchData = async page => {
    const response = await getNews({
      keyword: 'Solar system',
      pageSize: 10,
      currentPage: page,
    });
    setCurrentPage(response?.data?.response?.currentPage);
    const newData = response?.data?.response?.results;
    setData(prev => (page == 1 ? newData : [...prev, ...(newData || [])]));
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const onPressElement = id => {
    navigation.navigate(NEWS_READ_PAGE, {id});
  };

  const renderItem = useCallback(
    item => (
      <ListElement
        id={item.id}
        title={item.fields.headline}
        date={item.webPublicationDate}
        imageUri={item.fields.thumbnail}
        onPress={onPressElement}
      />
    ),
    [data],
  );

  const onEndReached = useCallback(async () => {
    if (!loadMore) {
      setLoadMore(true);
      const nextPage = currentPage + 1;
      await fetchData(nextPage);
      setLoadMore(false);
    }
  }, [currentPage, loadMore]);

  const onRefresh = async () => {
    setRefresh(true);
    await fetchData(1);
    setRefresh(false);
  };

  const listFooterComponent = useCallback(
    () => (loadMore ? <ActivityIndicator size="small" /> : null),
    [loadMore],
  );

  return {
    data,
    refresh,
    renderItem,
    onEndReached,
    onRefresh,
    listFooterComponent,
  };
};
