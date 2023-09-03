import authSlice from '@/app/store/authSlice';
import modalSlice from '@/app/store/modalSlice';
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketMock';
import { basketApi } from '@/shared/clientApi/basketApi';

// todo move to shared
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    basket: basketSlice,
    accessToken: authSlice,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(basketApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
