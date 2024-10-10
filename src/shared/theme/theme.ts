import { createTheme } from '@mui/material/styles'

import { COLORS } from './colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    error: {
      main: COLORS.error,
    },
    success: {
      main: COLORS.success,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
    background: {
      default: COLORS.background,
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,

  typography: {
    fontSize: 16,
    h1: {
      fontSize: 74,
    },
    button: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'large',
      },
    },
  },
})
