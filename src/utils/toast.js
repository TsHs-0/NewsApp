import Toast from 'react-native-toast-message';
import {INTERNET_CHECK} from './messages';

const ERROR = 'error';
const SUCCESS = 'success';

const SUCCESS_STORAGE_SAVE = 'success_storage_save';

const ERROR_CONNECTION = 'error_connection';
const ERROR_LOAD_CONTENT = 'error_load_content';
const ERROR_STORAGE_SAVE = 'error_storage_save';
const ERROR_LOAD_MORE_ARTICLES = 'error_load_more_articles';
const ERROR_OAD_SAVED_ARTICLES = 'error_load_saved_articles';

const showToast = ({
  type = 'info',
  text1 = '',
  text2 = '',
  position = 'top',
  visibilityTime = 5000,
  autoHide = true,
  topOffset = 20,
  bottomOffset = 20,
}) =>
  Toast.show({
    type,
    text1,
    text2,
    position,
    visibilityTime,
    autoHide,
    topOffset,
    bottomOffset,
  });

export const toastMessages = {
  [SUCCESS_STORAGE_SAVE]: () =>
    showToast({
      text1: 'Article Saved!✅',
      text2: 'Your article has been saved to Saved News!',
      type: SUCCESS,
    }),
  [ERROR_STORAGE_SAVE]: () =>
    showToast({
      text1: `Can't save Article!❌`,
      text2:
        'Something went wrong and cannot save your article into Saved News!',
      type: ERROR,
    }),
  [ERROR_LOAD_MORE_ARTICLES]: () =>
    showToast({
      text1: `Can't load articles!❌`,
      text2: INTERNET_CHECK,
      type: ERROR,
    }),
  [ERROR_LOAD_CONTENT]: () =>
    showToast({
      text1: `Can't load data!❌`,
      text2: INTERNET_CHECK,
      type: ERROR,
    }),
  [ERROR_CONNECTION]: () =>
    showToast({
      text1: `The internet connection is unavailable❌`,
      text2: INTERNET_CHECK,
      type: ERROR,
    }),
  [ERROR_OAD_SAVED_ARTICLES]: () =>
    showToast({
      text1: `Can't load articles!!❌`,
      text2: `Something went wrong, and can't load saved articles!!`,
      type: ERROR,
    }),
};
