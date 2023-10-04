import { RootState } from '@/app/store/types';
import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: state => {
      state.accessToken = '';
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;

const selectUser = (state: RootState) => state.accessToken;

// export const selectUserBaseRights = createSelector(
//   selectUser,
//   user => user.baseRights ?? [],
// );

export const logoutListener = createListenerMiddleware();

// logoutListener.startListening({
//   actionCreator: userSlice.actions.logout,
//   effect: (action, listenerApi) => {
//     listenerApi.dispatch(resetAllFromSession());
//   },
// });
