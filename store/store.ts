import {
  configureStore as reduxConfigureStoreRedux,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit'

// reducers
import exampleReducer from './example'

const rootReducer = combineReducers({
  example: exampleReducer,
})

// creates the store
function makeStore() {
  return reduxConfigureStoreRedux({ reducer: rootReducer })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
