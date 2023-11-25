import { create } from 'zustand'

interface IGeneralState {
    screen: number;
    changeScreen: (id: number) => void;
    authUser: (login: string, password: string) => void;
}

export const useGeneralStore = create<IGeneralState>((set) => ({
  screen: 0,
  changeScreen: (id) => set({screen: id}),
  authUser: async (login, password) => {
    const response = await fetch('http://localhost/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({login, password})
    });
    const data = await response.json();

    console.log(data);
  }
}))
