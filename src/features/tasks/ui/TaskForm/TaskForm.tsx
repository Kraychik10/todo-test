import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react'

import { useTaskContext } from '@/app/providers/TaskContext'
import { StyledButton } from '@/shared/ui'

import { StyledTextField } from './styles'

export const TaskForm: FC = () => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const { addTask } = useTaskContext()

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Task title is required')
      return
    } else {
      setError('')
      addTask(title)
      setTitle('')
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (inputValue.length > 30) {
      setError('Task title cannot exceed 30 characters')
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

    if (key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div>
      <StyledTextField
        error={!!error}
        fullWidth
        helperText={error}
        label='New Task'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={title}
      />
      <StyledButton color='error' onClick={handleSubmit} variant='contained'>
        Add Task
      </StyledButton>
    </div>
  )
}
