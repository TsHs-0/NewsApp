import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import Animated from 'react-native-reanimated';

export const SearchBar = ({
  value = '',
  setValue = () => {},
  animatedStyle = {},
  searchInputRef = null,
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
