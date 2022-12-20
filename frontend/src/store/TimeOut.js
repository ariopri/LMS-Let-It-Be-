import create from 'zustand';

const useTimeoutGlobal = create(set => ({
  timeout: 1300,
  setTimeout: timeout => set({ timeout }),
  clear: () => set({ timeout: null }),
}));

export default useTimeoutGlobal;
