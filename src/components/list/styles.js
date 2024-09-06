import {StyleSheet} from 'react-native';
import {fillSizes} from '../../utils/styles';

export const styles = StyleSheet.create({
  //masonry
  emptyListView: {alignSelf: 'center', marginTop: 20},
  emptyListText: {color: 'gray', fontSize: 20, fontWeight: 'bold'},
  masonryContentView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  //
  mainView: {
    width: '100%',
    overflow: 'hidden',
    borderWidth: 0.3,
    borderColor: 'gray',
  },

  //list
  thumbnailImageView: {
    ...fillSizes('100%'),
    flex: 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  thumbnailImage: {
    ...fillSizes('100%'),
  },

  //content
  contentView: {
    flex: 0.3,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'black',
  },
  contentDate: {fontSize: 14, color: 'black'},
  contentSaveButton: {
    right: 20,
    bottom: 12,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
