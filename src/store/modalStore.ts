import { FC } from 'react';
import { create } from 'zustand';

const initialState: IModalState = {
  modals: [],
};

const modalStore = create<IModalState & IModalActions>((set) => ({
  ...initialState,

  openModal: (arg) =>
    set((state) => {
      return { modals: state.modals.concat(arg) };
    }),

  closeModal: () =>
    set((state) => {
      return { modals: state.modals.slice(0, -1) };
    }),
}));

export default modalStore;

export const modalSelector = (state: IModalState) => state.modals;

export interface IModal {
  name: string;
  contents?: FC;
}

interface IModalState {
  modals: IModal[];
}

interface IModalActions {
  openModal: (props: IModal) => void;
  closeModal: () => void;
}
