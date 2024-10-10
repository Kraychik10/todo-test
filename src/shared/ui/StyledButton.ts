import { Button } from '@mui/material'
import { styled } from '@mui/system'

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '200px',
  height: '50px',
  fontSize: theme.spacing(2),
  backgroundColor: theme.palette.error.main,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}))
