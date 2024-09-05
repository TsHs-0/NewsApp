import {StyleSheet} from 'react-native';

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
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 8,
    height: 50,
  },
});
