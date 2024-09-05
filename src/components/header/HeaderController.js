import {useEffect, useRef, useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {getArticles} from '../../pages/homePage/HomeModel';
import {useDispatch, useSelector} from 'react-redux';
import {addKeyword, addLoading} from '../../redux/slices/homeSlice';

export const HeaderController = () => {
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const animatedSearchInputWidth = useSharedValue(0);
  const {keyword} = useSelector(state => state.home);
  const [isSearchOpen, setIsSearchOpen] = useState(0);

  const searchButtonPressHandle = () => {
    setIsSearchOpen(!isSearchOpen);
    searchInputRef.current.focus();
    animatedSearchInputWidth.value = withTiming(
      animatedSearchInputWidth.value === 0 ? 1 : 0,
      {duration: 300},
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedSearchInputWidth.value * 100}%`,
  }));

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isSearchOpen) {
        dispatch(addLoading(true));
        dispatch(getArticles({page: 1, keyword})).finally(() => {
          dispatch(addLoading(false));
        });
      }
    }, 1000);

    return () => clearTimeout(typingTimeout);
  }, [keyword]);

  const setKeyword = data => {
    dispatch(addKeyword(data));
  };

  return {
    keyword,
    setKeyword,
    animatedStyle,
    isSearchOpen,
    searchInputRef,
    searchButtonPressHandle,
  };
};
