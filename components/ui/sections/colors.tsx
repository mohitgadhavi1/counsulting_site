/**
 * Color variables for all section components
 * Centralized color management for consistent theming
 */

export const colors = {
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

