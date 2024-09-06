import {useCallback, useMemo, useState} from 'react';
import {styles} from '../styles';
import {DEFAULT_HEIGHT} from '../../../utils/constants';

export const ListElementController = ({masonry = false}) => {
  const [imageHeight, setImageHeight] = useState(DEFAULT_HEIGHT);

  const onLoad = useCallback(
    ({nativeEvent}) => {
      if (masonry) {
        const {height} = nativeEvent.source;
        setImageHeight(height > DEFAULT_HEIGHT ? height : DEFAULT_HEIGHT);
      }
    },
    [masonry],
  );

  const mainViewStyles = useMemo(
    () => ({
      height: masonry ? imageHeight : DEFAULT_HEIGHT,
      ...styles.mainView,
      ...(masonry ? {margin: 8} : {marginVertical: 6}),
    }),
    [masonry, imageHeight],
  );

  return {mainViewStyles, onLoad};
};
