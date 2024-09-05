import React, {memo} from 'react';
import {arrowIcon, savedIcon} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {MAIN} from '../../utils/constants';
import {IconButton} from '../../components/buttons/IconButton';
import {styles} from './styles';

export const ButtonsView = memo(
  ({saveLoading = false, onSavePress = () => {}, showSaveButton = true}) => {
    const navigation = useNavigation();
    return (
      <>
        <IconButton
          source={arrowIcon}
          style={{...styles.buttonCore, ...styles.backButton}}
          onPress={() => navigation.navigate(MAIN)}
        />
        {showSaveButton && (
          <IconButton
            source={savedIcon}
            style={{...styles.buttonCore, ...styles.saveButton}}
            onPress={onSavePress}
            loading={saveLoading}
          />
        )}
      </>
    );
  },
);
