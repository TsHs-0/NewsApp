import React from 'react';
import {TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {styles} from './styles';

export const SearchBar = ({
  value = '',
  animatedStyle = {},
  searchInputRef = null,
  setValue = () => {},
}) => {
  return (
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
          value={value}
          onChangeText={setValue}
        />
      </Animated.View>
    </View>
  );
};
