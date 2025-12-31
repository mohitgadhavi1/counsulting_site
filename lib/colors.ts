/**
 * Color scheme configuration
 * Simplified 4-color palette: background, text, card/sidebar, and accent
 */

export const colors = {
  // Core 4-color palette
  background: '#F1EFEC',      // Light warm background
  foreground: '#222831',      // Dark text
  card: '#a4be7b',            // Sage green for cards/sidebar
  accent: '#5f8d4e',          // Darker forest green for hover/emphasis

  // Card surfaces
  cardForeground: '#222831',
  popover: '#F1EFEC',
  popoverForeground: '#222831',

  // Primary / Secondary (mapped to our 4 colors)
  primary: '#a4be7b',
  primaryForeground: '#F1EFEC',
  secondary: '#5f8d4e',
  secondaryForeground: '#F1EFEC',

  // Muted variations
  muted: '#a4be7b',
  mutedForeground: '#222831',
  accentForeground: '#F1EFEC',

  // Destructive
  destructive: '#5f8d4e',
  destructiveForeground: '#F1EFEC',

  // Border/input/ring (subtle transparency from text color)
  border: 'rgba(34,40,49,0.1)',
  input: 'rgba(34,40,49,0.05)',
  ring: 'rgba(164,190,123,0.3)',

  // Charts (using our 4-color palette)
  chart1: '#a4be7b',
  chart2: '#5f8d4e',
  chart3: '#222831',
  chart4: '#F1EFEC',
  chart5: '#8ba86d',  // Slight variation between chart1 and chart2

  // Sidebar (uses card color)
  sidebar: '#a4be7b',
  sidebarForeground: '#F1EFEC',
  sidebarPrimary: '#5f8d4e',
  sidebarPrimaryForeground: '#F1EFEC',
  sidebarAccent: '#5f8d4e',
  sidebarAccentForeground: '#F1EFEC',
  sidebarBorder: 'rgba(34,40,49,0.1)',
  sidebarRing: 'rgba(164,190,123,0.3)',

  // Menu (uses card and accent colors)
  menu: '#a4be7b',
  menuHover: '#5f8d4e',
  menuForeground: '#F1EFEC',
  menuButton: '#a4be7b',
  menuButtonHover: '#5f8d4e',
  menuButtonForeground: '#F1EFEC',
  menuCloseButton: '#a4be7b',
  menuCloseButtonHover: '#5f8d4e',
  menuCloseButtonForeground: '#F1EFEC',
} as const;

/**
 * Color variables for all section components
 * Centralized color management for consistent theming
 */

export const colorClasses = {
  // Text colors mapped to CSS variables (enforced palette)
  text: {
    primary: 'text-[color:var(--foreground)]',
    secondary: 'text-[color:var(--secondary-foreground)]',
    tertiary: 'text-[color:var(--muted-foreground)]',
    white: 'text-[color:var(--primary-foreground)]',
  },

  // Primary/secondary semantic mappings using CSS vars
  indigo: {
    light: 'text-[color:var(--primary)]',
    medium: 'text-[color:var(--primary)]',
    dark: 'text-[color:var(--secondary)]',
    bg: 'bg-[color:var(--primary)]',
    bgHover: 'hover:bg-[color:var(--secondary)]',
    bgHoverLight: 'hover:bg-[color:var(--primary)]',
    border: 'border-[color:var(--border)]',
    borderDark: 'border-[color:var(--border)]',
  },

  // Secondary/palette groups
  purple: {
    light: 'text-[color:var(--primary)]',
    dark: 'text-[color:var(--secondary)]',
    bg: 'bg-[color:var(--secondary)]',
    bgHover: 'hover:bg-[color:var(--secondary)]',
  },

  pink: {
    light: 'text-[color:var(--primary)]',
    dark: 'text-[color:var(--secondary)]',
  },

  // Gradients built from the two greens and the tan
  gradients: {
    hero: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    services: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    techStack: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    about: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    contact: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    button: 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
    buttonHover: 'hover:from-[color:var(--secondary)] hover:to-[color:var(--primary)]',
    cardIndigo: 'bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--secondary)]/20',
    cardPurple: 'bg-gradient-to-br from-[color:var(--secondary)]/20 to-[color:var(--primary)]/20',
    cardPink: 'bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--secondary)]/20',
  },

  // Background helpers using CSS variables
  background: {
    overlay: 'bg-[color:var(--foreground)]/20',
    card: 'bg-[color:var(--card)]',
    cardHover: 'hover:bg-[color:var(--card)]/90',
  },

  // Border colors
  border: {
    white: 'border-[color:var(--border)]',
    indigo: 'border-[color:var(--border)]',
  },
} as const;

