/**
 * Color scheme configuration
 * Light theme with off-white background and darker cards/text
 */

export const colors = {
  // Background colors
  background: 'oklch(0.98 0 0)', // Off-white background
  foreground: 'oklch(1 1 1)', // Dark text for good contrast

  // Card colors
  card: 'oklch(5 5 5)', // Light gray card background (darker than background)
  cardForeground: 'oklch(0.15 0 0)', // Dark text on cards

  // Popover colors
  popover: 'oklch(0.95 0 0)',
  popoverForeground: 'oklch(0.15 0 0)',

  // Primary colors
  primary: 'oklch(0.25 0.15 260)', // Indigo primary
  primaryForeground: 'oklch(0.98 0 0)', // Light text on primary

  // Secondary colors
  secondary: 'oklch(0.92 0 0)', // Light gray secondary
  secondaryForeground: 'oklch(0.25 0 0)', // Dark text on secondary

  // Muted colors
  muted: 'oklch(0.94 0 0)', // Slightly darker gray for muted backgrounds
  mutedForeground: 'oklch(0.45 0 0)', // Medium gray for muted text

  // Accent colors
  accent: 'oklch(0.93 0 0)', // Light gray accent
  accentForeground: 'oklch(0.25 0 0)', // Dark text on accent

  // Destructive colors
  destructive: 'oklch(0.577 0.245 27.325)', // Red for destructive actions
  destructiveForeground: 'oklch(0.98 0 0)', // Light text on destructive

  // Border and input colors
  border: 'oklch(0.88 0 0)', // Light gray borders
  input: 'oklch(0.90 0 0)', // Slightly darker for inputs
  ring: 'oklch(0.60 0.15 260)', // Indigo ring color

  // Chart colors (keeping vibrant for data visualization)
  chart1: 'oklch(0.646 0.222 41.116)',
  chart2: 'oklch(0.6 0.118 184.704)',
  chart3: 'oklch(0.398 0.07 227.392)',
  chart4: 'oklch(0.828 0.189 84.429)',
  chart5: 'oklch(0.769 0.188 70.08)',

  // Sidebar colors
  sidebar: 'oklch(0.96 0 0)',
  sidebarForeground: 'oklch(0.15 0 0)',
  sidebarPrimary: 'oklch(0.25 0.15 260)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.93 0 0)',
  sidebarAccentForeground: 'oklch(0.25 0 0)',
  sidebarBorder: 'oklch(0.88 0 0)',
  sidebarRing: 'oklch(0.60 0.15 260)',

  // Menu colors
  menu: 'oklch(0.92 0.25 130)', // Bright lime green menu background
  menuHover: 'oklch(0.95 0.25 130)', // Lighter lime on hover
  menuForeground: 'oklch(0.15 0 0)', // Dark text on menu
  menuButton: 'oklch(0.92 0.25 130)', // Bright lime button
  menuButtonHover: 'oklch(0.95 0.25 130)', // Lighter lime button hover
  menuButtonForeground: 'oklch(0.15 0 0)', // Dark text on button
  menuCloseButton: 'oklch(0.15 0 0)', // Dark close button
  menuCloseButtonHover: 'oklch(0.25 0 0)', // Slightly lighter on hover
  menuCloseButtonForeground: 'oklch(0.92 0.25 130)', // Bright lime text on close button
} as const;

