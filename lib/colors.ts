/**
 * Color scheme configuration
 * Light theme with off-white background and darker cards/text
 */

export const colors = {
  // Core palette (only these four colors are used across the site)
  // Light / Background: warm tan
  background: '#E5D9B6',
  // Dark / Text: deep green
  foreground: '#285430',

  // Card / popover surfaces use the same light background
  card: '#E5D9B6',
  cardForeground: '#285430',
  popover: '#E5D9B6',
  popoverForeground: '#285430',

  // Primary / Accent
  primary: '#A4BE7B',
  primaryForeground: '#E5D9B6',
  secondary: '#5F8D4E',
  secondaryForeground: '#E5D9B6',

  // Muted / accent variations (map to palette)
  muted: '#A4BE7B',
  mutedForeground: '#285430',
  accent: '#A4BE7B',
  accentForeground: '#285430',

  // Destructive uses the darkest palette color (project requested only these colors)
  destructive: '#285430',
  destructiveForeground: '#E5D9B6',

  // Border/input/ring use transparent variants derived from the darkest color
  border: 'rgba(40,84,48,0.12)',
  input: 'rgba(40,84,48,0.08)',
  ring: 'rgba(164,190,123,0.28)',

  // Charts: map to palette variations
  chart1: '#A4BE7B',
  chart2: '#5F8D4E',
  chart3: '#285430',
  chart4: '#E5D9B6',
  chart5: '#A4BE7B',

  // Sidebar/menu (semantic mapping)
  sidebar: '#E5D9B6',
  sidebarForeground: '#285430',
  sidebarPrimary: '#A4BE7B',
  sidebarPrimaryForeground: '#E5D9B6',
  sidebarAccent: '#A4BE7B',
  sidebarAccentForeground: '#285430',
  sidebarBorder: 'rgba(40,84,48,0.12)',
  sidebarRing: 'rgba(164,190,123,0.28)',

  menu: '#A4BE7B',
  menuHover: '#5F8D4E',
  menuForeground: '#285430',
  menuButton: '#A4BE7B',
  menuButtonHover: '#5F8D4E',
  menuButtonForeground: '#285430',
  menuCloseButton: '#285430',
  menuCloseButtonHover: '#5F8D4E',
  menuCloseButtonForeground: '#A4BE7B',
} as const;

