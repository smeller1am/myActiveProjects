import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export enum ModalType {
  Product,
  Basket,
  Authorization,
  Address,
}
export interface ModalState {
  isOpen: ModalType | null;
}

const initialState: ModalState = {
  isOpen: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<ModalType>) => {
      state.isOpen = payload;
    },
    closeModal: state => {
      state.isOpen = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
