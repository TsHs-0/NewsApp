import {MasonryFlashList} from '@shopify/flash-list';
import React, {memo, useCallback} from 'react';
import {ListElement} from './ListElement';

export const ListView = memo(
  ({
    masonry = false,
    onOpenHandle = () => {},
    onDeleteHandle = () => {},
    data = [],
    ...props
  }) => {
    const renderItem = useCallback(
      item => (
        <ListElement
          id={item.id}
          title={item.fields.headline}
          date={item.webPublicationDate}
          imageUri={item.fields.thumbnail}
          onPress={onOpenHandle}
          onDelete={onDeleteHandle}
          masonry={masonry}
        />
      ),
      [masonry],
    );
    return (
      <MasonryFlashList
        data={data}
        key={masonry ? 'masonry' : 'list'}
        numColumns={masonry ? 2 : 1}
        renderItem={({item}) => renderItem(item)}
        estimatedItemSize={150}
        {...props}
      />
    );
  },
);
