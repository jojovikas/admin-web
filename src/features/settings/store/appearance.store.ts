import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  AccentColor,
  ThemeMode,
} from "../types/appearance.types";

interface AppearanceState {
  mode: ThemeMode;
  accentColor: AccentColor;

  setMode: (mode: ThemeMode) => void;
  setAccentColor: (color: AccentColor) => void;

  reset: () => void;
}

const DEFAULT_MODE: ThemeMode = "system";
const DEFAULT_ACCENT: AccentColor = "blue";

export const useAppearanceStore = create<AppearanceState>()(
  persist(
    (set) => ({
      mode: DEFAULT_MODE,
      accentColor: DEFAULT_ACCENT,

      setMode: (mode) =>
        set({
          mode,
        }),

      setAccentColor: (accentColor) =>
        set({
          accentColor,
        }),

      reset: () =>
        set({
          mode: DEFAULT_MODE,
          accentColor: DEFAULT_ACCENT,
        }),
    }),
    {
      name: "appearance-storage",
    }
  )
);