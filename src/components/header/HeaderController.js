import {useRef, useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const HeaderController = () => {
  const searchInputRef = useRef();
  const [isSearchOpen, setIsSearchOpen] = useState(0);
  const animatedSearchInputWidth = useSharedValue(0);

  const searchButtonPressHandle = () => {
    searchInputRef.current.focus();
    setIsSearchOpen(!isSearchOpen);
    animatedSearchInputWidth.value = withTiming(
      animatedSearchInputWidth.value === 0 ? 1 : 0,
      {duration: 300},
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedSearchInputWidth.value * 100}%`,
  }));

  return {
    animatedStyle,
    isSearchOpen,
    searchInputRef,
    searchButtonPressHandle,
  };
};
