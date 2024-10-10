import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  minHeight: theme.spacing(10),
  '& .MuiInputBase-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.main,
  },
}))
