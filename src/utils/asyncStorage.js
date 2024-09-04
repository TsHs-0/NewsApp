import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_NAME} from './constants';

export const saveArticleToTheStorage = async item => {
  try {
    const res = JSON.parse((await AsyncStorage.getItem(APP_NAME)) || '{}');
    res[item.id] = item;
    AsyncStorage.setItem(APP_NAME, JSON.stringify(res));
    return true;
  } catch (error) {
    return false;
  }
};

export const getArticlesFromStorage = async id => {
  try {
    let res = JSON.parse((await AsyncStorage.getItem(APP_NAME)) || '{}');
    if (id) {
      res = res[id];
    }
    return res;
  } catch (error) {
    return false;
  }
};
