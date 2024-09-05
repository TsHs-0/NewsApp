import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {fillSizes} from '../../utils/styles';
import {closeIcon, mainLogo, searchIcon} from '../../assets';
import {IconButton} from '../buttons/IconButton';
import {styles} from './styles';
import {HeaderController} from './HeaderController';
import {useTheme} from '@react-navigation/native';
import {SearchBar} from './SearchBar';

export const Header = memo(() => {
  const {
    keyword,
    setKeyword,
    animatedStyle,
    isSearchOpen,
    searchInputRef,
    searchButtonPressHandle,
  } = HeaderController();

  const {colors} = useTheme();

  return (
    <View style={styles.mainView}>
      <Image
        tintColor={colors.primary}
        source={mainLogo}
        style={{...fillSizes(20)}}
      />
      <SearchBar
        value={keyword}
        setValue={setKeyword}
        animatedStyle={animatedStyle}
        searchInputRef={searchInputRef}
      />
      <IconButton
        source={isSearchOpen ? closeIcon : searchIcon}
        onPress={searchButtonPressHandle}
      />
    </View>
  );
});
