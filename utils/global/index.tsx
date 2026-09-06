import { create } from "zustand";

interface GlobalState {
  color: string;
  setColor: (color: string) => void;
  size: number;
  setSize: (size: number) => void;
  texture: string;
  setTexture: (texture: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  color: "#d4d4d4",
  setColor: (color) => set({ color }),
  size: 16,
  setSize: (size) => set({ size }),
  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),
}));
