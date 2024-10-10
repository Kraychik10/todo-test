import { FC } from 'react'

import { Container, Typography } from '@mui/material'

import { TaskProvider, ThemeProvider } from '@/app/providers'
import { TaskForm, TaskList } from '@/features/tasks/ui'

const Home: FC = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Container>
          <Typography gutterBottom variant='h1'>
            To-Do List
          </Typography>
          <TaskForm />
          <TaskList />
        </Container>
      </TaskProvider>
    </ThemeProvider>
  )
}

export default Home
