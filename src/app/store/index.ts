import authSlice from '@/app/store/authSlice';
import modalSlice from '@/app/store/modalSlice';
import { emptySplitApi } from '@/shared/clientApi/base';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketMock';
import { basketApi } from '@/shared/clientApi/basketApi';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// todo move to shared
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [emptySplitApi.reducerPath],
};
const rootReducer = combineReducers({
  modal: modalSlice,
  basket: basketSlice,
  accessToken: authSlice,
  [basketApi.reducerPath]: basketApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(emptySplitApi.middleware),
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
