import React from 'react';
import {Image, TextInput, useColorScheme, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {fillSizes} from '../../utils/styles';
import {closeIcon, mainLogo, searchIcon} from '../../assets';
import {IconButton} from '../buttons/IconButton';
import {styles} from './styles';
import {HeaderController} from './HeaderController';
import {useTheme} from '@react-navigation/native';

export const Header = () => {
  const {animatedStyle, isSearchOpen, searchInputRef, searchButtonPressHandle} =
    HeaderController();

  const {colors} = useTheme();

  return (
    <View style={styles.mainView}>
      <Image
        tintColor={colors.primary}
        source={mainLogo}
        style={{...fillSizes(20)}}
      />
      <View style={styles.inputOuterView}>
        <Animated.View
          style={{
            ...animatedStyle,
            alignSelf: 'flex-end',
          }}>
          <TextInput
            ref={searchInputRef}
            placeholder="Search..."
            style={styles.input}
          />
        </Animated.View>
      </View>
      <IconButton
        source={isSearchOpen ? closeIcon : searchIcon}
        onPress={searchButtonPressHandle}
      />
    </View>
  );
};
