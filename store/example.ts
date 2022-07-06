// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// import counterReducer from '../features/counter/counterSlice'

// export function makeStore() {
//   return configureStore({
//     reducer: { counter: counterReducer },
//   })
// }

// const store = makeStore()

// export type AppState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action<string>
// >

// export default store


import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
// import type { RootState } from '../../app/store';

// declaring the types for our state
export type CounterState = {
  value: number;
};
const initialState = {
  loading: false, 
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
} = slice.actions;

export const selectLoading = (state : RootState) => state.example.loading


export default slice.reducer;
