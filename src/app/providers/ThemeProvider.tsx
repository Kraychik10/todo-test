import React, { FC } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

import { theme } from '../../shared/theme'

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
