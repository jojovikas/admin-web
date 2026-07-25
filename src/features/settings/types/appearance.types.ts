export type ThemeMode = "light" | "dark" | "system";

export type AccentColor =
  | "blue"
  | "green"
  | "purple"
  | "red"
  | "orange"
  | "slate"
  | "rose"
  | "amber";

export interface ThemeVariables {
  primary: string;
  primaryForeground: string;

  sidebarPrimary: string;
  sidebarPrimaryForeground: string;

  ring: string;

  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
}