import {configureStore} from '@reduxjs/toolkit';
import homeSlice from '../slices/homeSlice';
import indexSlice from '../slices/indexSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    index: indexSlice,
  },
});
