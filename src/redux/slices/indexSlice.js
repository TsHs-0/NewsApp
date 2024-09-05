import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  internetAvailable: true,
};

const reducers = {
  setInternetAvailable: (state, action) => {
    state.internetAvailable = action.payload;
  },
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers,
});

export const {setInternetAvailable} = indexSlice.actions;
export default indexSlice.reducer;
