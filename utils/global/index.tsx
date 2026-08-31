import { create } from "zustand";

interface GlobalState {
  color: string;
  setColor: (color: string) => void;
  size: number;
  setSize: (size: number) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  color: "#171717",
  setColor: (color) => set({ color }),
  size: 16,
  setSize: (size) => set({ size }),
}));
