import React, {memo} from 'react';
import {arrowIcon, savedIcon} from '../../assets';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {MAIN} from '../../utils/constants';
import {IconButton} from '../../components/buttons/IconButton';

export const ButtonsView = memo(
  ({saveLoading = false, onSavePress = () => {}}) => {
    const navigation = useNavigation();
    return (
      <>
        <IconButton
          source={arrowIcon}
          style={{...styles.buttonCore, ...styles.backButton}}
          onPress={() => navigation.navigate(MAIN)}
        />
        <IconButton
          source={savedIcon}
          style={{...styles.buttonCore, ...styles.saveButton}}
          onPress={onSavePress}
          loading={saveLoading}
        />
      </>
    );
  },
);
