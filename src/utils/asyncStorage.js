import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_NAME} from './constants';

export const saveArticleToTheStorage = async ({item, all}) => {
  try {
    let res;
    if (all) {
      res = all;
    } else {
      res = JSON.parse((await AsyncStorage.getItem(APP_NAME)) || '[]');
      res.unshift(item);
    }
    AsyncStorage.setItem(APP_NAME, JSON.stringify(res));
    return true;
  } catch (error) {
    return error;
  }
};

export const getArticlesFromStorage = async id => {
  try {
    let res = JSON.parse((await AsyncStorage.getItem(APP_NAME)) || '[]');
    if (id) {
      res = res.find(e => e.id === id);
    }
    return res;
  } catch (error) {
    return false;
  }
};
