import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  contentData: [],
  currentPage: 1,
  loading: true,
  keyword: '',
};

const reducers = {
  addContentData: (state, action) => {
    const {add, data} = action.payload;
    const newData = add ? [...state.contentData, ...data] : data;
    state.contentData = newData;
  },
  addCurrentPage: (state, action) => {
    state.currentPage = action.payload;
  },
  addLoading: (state, action) => {
    state.loading = action.payload;
  },
  addKeyword: (state, action) => {
    state.keyword = action.payload;
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers,
});

export const {addContentData, addCurrentPage, addLoading, addKeyword} =
  homeSlice.actions;
export default homeSlice.reducer;
