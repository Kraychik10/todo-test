import { Box, Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  alignItems: 'start',
  minHeight: theme.spacing(10),
  padding: 0,
}))

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: theme.spacing(6),
    color: theme.palette.error.main,
  },
}))

export const StyledTaskBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  minHeight: theme.spacing(10),
  paddingTop: theme.spacing(1),
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}))

export const StyledTypography = styled(Typography)<{ isCompleted: boolean }>(({ isCompleted, theme }) => ({
  flexGrow: 1,
  fontSize: theme.spacing(4),
  textDecoration: isCompleted ? 'line-through' : 'none',
}))

export const StyledActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  minWidth: theme.spacing(10),
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}))
