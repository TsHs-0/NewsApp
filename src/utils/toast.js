import Toast from 'react-native-toast-message';
export const SUCCESS = 'success';
export const ERROR = 'error';

export const showToast = ({
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
  [SUCCESS]: () =>
    showToast({
      text1: 'Article Saved!✅',
      text2: 'Your article saved into Saved News!',
      type: SUCCESS,
    }),
  [ERROR]: () =>
    showToast({
      text1: `Can't save Article!❌`,
      text2:
        'Something went wrong and can not save your article into Saved News!',
      type: ERROR,
    }),
};
