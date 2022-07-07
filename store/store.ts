import {
  configureStore as reduxConfigureStoreRedux,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
// reducers
import exampleReducer from './example'
import { pokemonApi } from '../services/pokemon'

const rootReducer = combineReducers({
  example: exampleReducer,
   // Add the generated reducer as a specific top-level slice
  [pokemonApi.reducerPath]: pokemonApi.reducer
})

// creates the store
function makeStore() {
  return reduxConfigureStoreRedux({ reducer: rootReducer, 
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), })
}

const store = makeStore()
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
