import type {
  AccentColor,
  ThemeVariables,
} from "../types/appearance.types";

export const themes: Record<AccentColor, ThemeVariables> = {
  blue: {
    primary: "oklch(0.62 0.22 259)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.62 0.22 259)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.62 0.22 259)",

    chart1: "oklch(0.78 0.16 259)",
    chart2: "oklch(0.68 0.20 259)",
    chart3: "oklch(0.58 0.22 259)",
    chart4: "oklch(0.48 0.20 259)",
    chart5: "oklch(0.38 0.18 259)",
  },

  green: {
    primary: "oklch(0.68 0.19 145)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.68 0.19 145)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.68 0.19 145)",

    chart1: "oklch(0.82 0.12 145)",
    chart2: "oklch(0.72 0.17 145)",
    chart3: "oklch(0.62 0.20 145)",
    chart4: "oklch(0.52 0.18 145)",
    chart5: "oklch(0.42 0.16 145)",
  },

  purple: {
    primary: "oklch(0.63 0.24 305)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.63 0.24 305)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.63 0.24 305)",

    chart1: "oklch(0.80 0.14 305)",
    chart2: "oklch(0.70 0.20 305)",
    chart3: "oklch(0.60 0.23 305)",
    chart4: "oklch(0.50 0.20 305)",
    chart5: "oklch(0.40 0.18 305)",
  },

  red: {
    primary: "oklch(0.63 0.24 25)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.63 0.24 25)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.63 0.24 25)",

    chart1: "oklch(0.80 0.13 25)",
    chart2: "oklch(0.70 0.18 25)",
    chart3: "oklch(0.60 0.23 25)",
    chart4: "oklch(0.50 0.21 25)",
    chart5: "oklch(0.40 0.18 25)",
  },

  orange: {
    primary: "oklch(0.74 0.18 60)",
    primaryForeground: "oklch(0.145 0 0)",

    sidebarPrimary: "oklch(0.74 0.18 60)",
    sidebarPrimaryForeground: "oklch(0.145 0 0)",

    ring: "oklch(0.74 0.18 60)",

    chart1: "oklch(0.86 0.10 60)",
    chart2: "oklch(0.78 0.15 60)",
    chart3: "oklch(0.68 0.18 60)",
    chart4: "oklch(0.58 0.17 60)",
    chart5: "oklch(0.48 0.16 60)",
  },

  slate: {
    primary: "oklch(0.42 0.03 255)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.42 0.03 255)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.42 0.03 255)",

    chart1: "oklch(0.78 0.02 255)",
    chart2: "oklch(0.66 0.03 255)",
    chart3: "oklch(0.54 0.03 255)",
    chart4: "oklch(0.44 0.03 255)",
    chart5: "oklch(0.34 0.03 255)",
  },

  rose: {
    primary: "oklch(0.67 0.22 10)",
    primaryForeground: "oklch(0.985 0 0)",

    sidebarPrimary: "oklch(0.67 0.22 10)",
    sidebarPrimaryForeground: "oklch(0.985 0 0)",

    ring: "oklch(0.67 0.22 10)",

    chart1: "oklch(0.82 0.12 10)",
    chart2: "oklch(0.72 0.17 10)",
    chart3: "oklch(0.62 0.22 10)",
    chart4: "oklch(0.52 0.20 10)",
    chart5: "oklch(0.42 0.18 10)",
  },

  amber: {
    primary: "oklch(0.82 0.17 85)",
    primaryForeground: "oklch(0.145 0 0)",

    sidebarPrimary: "oklch(0.82 0.17 85)",
    sidebarPrimaryForeground: "oklch(0.145 0 0)",

    ring: "oklch(0.82 0.17 85)",

    chart1: "oklch(0.92 0.08 85)",
    chart2: "oklch(0.84 0.13 85)",
    chart3: "oklch(0.74 0.16 85)",
    chart4: "oklch(0.64 0.16 85)",
    chart5: "oklch(0.54 0.15 85)",
  },
};