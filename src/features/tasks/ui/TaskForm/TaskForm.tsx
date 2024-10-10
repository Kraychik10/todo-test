import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'

import { errors, keyBoard, MAX_LENGTH } from '@model/index'

import { useTaskContext } from '@/app/providers/TaskContext'
import { StyledButton } from '@/shared/ui'

import { StyledTextField } from './styles'

export const TaskForm: FC = () => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const { addTask } = useTaskContext()

  const handleSubmit = () => {
    if (!title.trim()) {
      setError(errors.TASK_TITLE_REQUIRED)
      setTimeout(() => {
        setError('')
      }, 2000)
      return
    } else {
      setError('')
      addTask(title)
      setTitle('')
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (inputValue.length > MAX_LENGTH) {
      setError(errors.TASK_LENGTH)
      setTimeout(() => {
        setError('')
      }, 2000)
    } else {
      setError('')
      setTitle(inputValue)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event

    if (key === keyBoard.ENTER) {
      handleSubmit()
    }
  }

  return (
    <>
      <StyledTextField
        error={!!error}
        fullWidth
        helperText={error}
        label='New Task'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={title}
      />
      <StyledButton onClick={handleSubmit}>Add Task</StyledButton>
    </>
  )
}
