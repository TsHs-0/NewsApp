import {StyleSheet} from 'react-native';
import {fillSizes} from '../../utils/styles';

export const styles = StyleSheet.create({
  mainView: {
    paddingTop: 8,
    ...fillSizes('100%'),
    paddingHorizontal: 12,
  },
  listViewButton: {alignSelf: 'flex-end'},
});
