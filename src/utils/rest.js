import {DEFAULT_URL} from '../config';
import RNFS from 'react-native-fs';
import {APP_NAME} from './constants';

const createSearchQuery = ({keyword, currentPage, pageSize}) =>
  'search?' +
  new URLSearchParams({
    q: keyword,
    page: currentPage,
    'page-size': pageSize,
    'order-by': 'newest',
    'api-key': 'test',
    'show-fields': 'headline,thumbnail',
  }).toString();

const createSingleElementQuery = ({id}) =>
  id +
  '?' +
  new URLSearchParams({
    'api-key': 'test',
    'show-fields': 'all',
  }).toString();

export const getNews = async ({
  id = null,
  keyword = '',
  pageSize = 14,
  currentPage = 1,
}) => {
  let queryParams = '';
  if (!id) {
    queryParams = createSearchQuery({keyword, currentPage, pageSize});
  } else {
    queryParams = createSingleElementQuery({id});
  }

  try {
    const res = await fetch(`${DEFAULT_URL}${queryParams}`);
    if (!res.ok) {
      return {done: false};
    }
    const data = await res.json();
    return {done: true, data};
  } catch (error) {
    return {done: false};
  }
};

export const getArticleImage = async ({url = ''}) => {
  try {
    const location = RNFS.DocumentDirectoryPath + '/' + APP_NAME;
    await RNFS.exists(location).then(exist => {
      if (!exist) {
        RNFS.mkdir(location)
          .then(() => {})
          .catch(() => {
            return false;
          });
      }
    });

    const toFile =
      location +
      '/' +
      new Date().getTime() +
      url.split('/').slice(-1).pop();

    const download = await RNFS.downloadFile({
      fromUrl: url,
      toFile,
    }).promise;

    if (download.statusCode === 200) {
      return toFile;
    } else {
      return false;
    }
  } catch (error) {}
};
