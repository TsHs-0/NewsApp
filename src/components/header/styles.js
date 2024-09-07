import {StyleSheet} from 'react-native';
import {BLACK, GRAY} from '../../utils/styles';

export const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  inputOuterView: {width: '80%', overflow: 'hidden', alignItems: 'flex-end'},
  input: {
    paddingHorizontal: 16,
    borderColor: GRAY,
    borderWidth: 0.3,
    borderRadius: 8,
    color: BLACK,
    height: 50,
  },
});
