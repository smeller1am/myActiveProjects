import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: state => {
      state.token = '';
    },
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
