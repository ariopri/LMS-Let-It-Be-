import create from 'zustand';

const useTimeoutGlobal = create(set => ({
  timeout: 2000,
  setTimeout: timeout => set({ timeout }),
  clear: () => set({ timeout: null }),
}));

export default useTimeoutGlobal;
