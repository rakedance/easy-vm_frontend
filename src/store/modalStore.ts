import { create } from 'zustand'

interface IModalState {
    isOpen: boolean;
    title: string;
    changeModal: (isOpen: boolean, title: string) => void;
}

export const useModalStore = create<IModalState>((set) => ({
  isOpen: false,
  title: '',
  changeModal: (isOpen, title) => set(() => ({ isOpen, title })),
}))
