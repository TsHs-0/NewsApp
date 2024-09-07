import {StyleSheet} from 'react-native';
import {BLACK, fillSizes, GRAY, WHITE} from '../../utils/styles';

export const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 15,
  },
  buttonCore: {
    position: 'absolute',
    ...fillSizes(24),

    zIndex: 10,
    padding: 20,
    backgroundColor: WHITE,
    borderWidth: 0.3,
    borderColor: GRAY,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    top: 30,
    left: 18,
  },
  saveButton: {
    top: 30,
    right: 18,
  },
  scrollContainer: {paddingBottom: 28},
  headerText: {
    fontSize: 32,
    color: BLACK,
    fontWeight: 'bold',
    marginTop: 16,
  },
  additionalInfoView: {
    paddingHorizontal: 12,
    gap: 8,
    marginTop: 12,
  },
  additionalInfoElement: {fontSize: 16, color: BLACK},
  contentView: {marginTop: 18},
});
