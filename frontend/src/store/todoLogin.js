import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useLoginState = create(
  persist(
    devtools((set, get) => ({
      isLoggedIn: false,
      userId: '',
      loggedAs: '',
      setIsLoggedIn: () => set({ isLoggedIn: true }),
      setIsLoggedOut: () => set({ isLoggedIn: false }),
      setUserId: id => set({ userId: id }),
      setLoggedAs: user => set({ loggedAs: user }),
    })),
    {
      name: 'client',
      getStorage: () => localStorage,
    }
  )
);

export default useLoginState;
