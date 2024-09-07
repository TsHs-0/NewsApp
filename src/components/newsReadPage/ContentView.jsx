import React, {memo} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {AdditionalInfo} from './AdditionalInfo';
import {LayeredImage} from '../image/LayeredImage';
import {styles} from './styles';
import {BLACK} from '../../utils/styles';

export const ContentView = memo(
  ({image = '', headline = '', date = '', author = '', body = ''}) => {
    const {width} = useWindowDimensions();

    const content = {
      html:
        `<body style="color:${BLACK};font-size:18px;padding:0 12px;">` +
        body +
        '</body>',
    };

    return (
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}>
        {/* image */}
        <LayeredImage size={400} source={image ? {uri: image} : ''} />

        {/* header text */}
        <Text style={styles.headerText}>{headline}</Text>

        {/* additional info / author, date */}
        <AdditionalInfo author={author} date={date} />

        {/* content */}
        <View style={styles.contentView}>
          <RenderHTML contentWidth={width} source={content} />
        </View>
      </ScrollView>
    );
  },
);
