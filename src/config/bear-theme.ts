import type { BearThemeOverride, CustomVariantsMap } from '@forgedevstack/bear';

export const RAIL_COLORS = {
  primary: {
    50:  '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
  secondary: {
    50:  '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
} as const;

export const railTheme: BearThemeOverride = {
  colors: {
    primary: RAIL_COLORS.primary,
    secondary: RAIL_COLORS.secondary,
    background: {
      primary: '#0a0a14',
      secondary: '#111122',
      tertiary: '#1a1a2e',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
      muted: '#64748b',
      inverted: '#0f172a',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.06)',
      subtle: 'rgba(255, 255, 255, 0.03)',
      strong: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: {
      sans: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
  },
};

export const railVariants: CustomVariantsMap = {
  rail: {
    bg: '#06b6d4',
    bgHover: '#0891b2',
    text: '#ffffff',
    ring: '#22d3ee',
  },
  railGhost: {
    bg: 'rgba(6, 182, 212, 0.1)',
    bgHover: 'rgba(6, 182, 212, 0.2)',
    text: '#22d3ee',
    border: 'rgba(6, 182, 212, 0.3)',
  },
  railSubtle: {
    bg: 'rgba(34, 211, 238, 0.08)',
    bgHover: 'rgba(34, 211, 238, 0.15)',
    text: '#67e8f9',
    border: 'rgba(34, 211, 238, 0.2)',
  },
};
