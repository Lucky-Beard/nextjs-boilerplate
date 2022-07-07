import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { useTimeout } from '../hooks';
// declaring the types for our state
export type ExampleState = {
  loading: boolean;
};

const initialState: ExampleState = {
  loading: false, 
};

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
// they are also exported so that they can be imported anywhere
export const {
  setLoading,
} = slice.actions;

export const selectLoading = (state : RootState) => state.example.loading

export default slice.reducer;
