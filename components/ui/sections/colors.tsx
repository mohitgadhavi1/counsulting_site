/**
 * Color variables for all section components
 * Centralized color management for consistent theming
 */

export const colors = {
  // Text colors
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    tertiary: 'text-gray-800',
    white: 'text-white',
  },
  
  // Indigo colors
  indigo: {
    light: 'text-indigo-400',
    medium: 'text-indigo-500',
    dark: 'text-indigo-700',
    bg: 'bg-indigo-600',
    bgHover: 'hover:bg-indigo-700',
    bgHoverLight: 'hover:bg-indigo-400',
    border: 'border-indigo-400',
    borderDark: 'border-indigo-500',
  },
  
  // Purple colors
  purple: {
    light: 'text-purple-400',
    dark: 'text-purple-700',
    bg: 'bg-purple-600',
    bgHover: 'hover:bg-purple-700',
  },
  
  // Pink colors
  pink: {
    light: 'text-pink-400',
    dark: 'text-pink-700',
  },
  
  // Gradient classes
  gradients: {
    hero: 'bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700',
    services: 'bg-gradient-to-br from-indigo-700 to-purple-700',
    techStack: 'bg-gradient-to-br from-purple-700 to-pink-700',
    about: 'bg-gradient-to-br from-indigo-700 to-purple-700',
    contact: 'bg-gradient-to-br from-indigo-700 to-purple-700',
    button: 'bg-gradient-to-br from-indigo-600 to-purple-600',
    buttonHover: 'hover:from-indigo-700 hover:to-purple-700',
    cardIndigo: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
    cardPurple: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    cardPink: 'bg-gradient-to-br from-pink-500/20 to-indigo-500/20',
  },
  
  // Background colors
  background: {
    overlay: 'bg-black/20',
    card: 'bg-white/5',
    cardHover: 'hover:bg-white/10',
  },
  
  // Border colors
  border: {
    white: 'border-white/10',
    indigo: 'border-indigo-500/30',
  },
} as const;

