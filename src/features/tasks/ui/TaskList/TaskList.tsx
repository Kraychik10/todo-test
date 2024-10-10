import { FC } from 'react'

import { List } from '@mui/material'

import { useTaskContext } from '@/app/providers/TaskContext'

import { TaskItem } from '../TaskItem/TaskItem'

export const TaskList: FC = () => {
  const { tasks } = useTaskContext()

  return (
    <List>
      {tasks.map(({ completed, id, title }) => (
        <TaskItem completed={completed} id={id} key={id} title={title} />
      ))}
    </List>
  )
}
