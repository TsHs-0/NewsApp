import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {BLUE, fillSizes} from '../../utils/styles';
import {closeIcon, mainLogo, searchIcon} from '../../assets';
import {IconButton} from '../buttons/IconButton';
import {styles} from './styles';
import {HeaderController} from './HeaderController';
import {SearchBar} from './SearchBar';

export const Header = memo(() => {
  const {
    keyword,
    isSearchOpen,
    animatedStyle,
    searchInputRef,
    setKeyword,
    searchButtonPressHandle,
  } = HeaderController();

  return (
    <View style={styles.mainView}>
      <Image tintColor={BLUE} source={mainLogo} style={{...fillSizes(20)}} />
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
