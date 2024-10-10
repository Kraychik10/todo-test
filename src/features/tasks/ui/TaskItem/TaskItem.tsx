import React, { FC, MouseEvent, useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { TextField } from '@mui/material'

import { useTaskContext } from '@/app/providers/TaskContext'

import * as S from './styles'

interface TaskItemProps {
  id: number
  title: string
  completed: boolean
}

export const TaskItem: FC<TaskItemProps> = ({ completed, id, title }) => {
  const { deleteTask, editTask } = useTaskContext()
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [isCompleted, setIsCompleted] = useState(completed)
  const [error, setError] = useState('')

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (newTitle.trim().length === 0) {
      setError('Task title is required')
      return
    }

    editTask(id, newTitle)
    setIsEditing(false)
    setError('')
  }

  const handleDelete = (id: number) => () => {
    deleteTask(id)
  }

  const handleEditSaveClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    isEditing ? handleSave() : handleEdit()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (inputValue.length > 30) {
      setError('Task title cannot exceed 30 characters')
    } else {
      setNewTitle(inputValue)
      setError('')
    }
  }

  const toggleCompleted = () => {
    setIsCompleted((prev) => !prev)
  }

  return (
    <S.StyledListItem
      onClick={() => {
        if (!isEditing) toggleCompleted()
      }}
    >
      <S.StyledCheckbox checked={isCompleted} color='error' />

      <S.StyledTaskBox>
        {isEditing ? (
          <TextField
            error={!!error}
            fullWidth
            helperText={`${newTitle.length}/30`}
            onChange={handleChange}
            size='small'
            value={newTitle}
          />
        ) : (
          <S.StyledTypography isCompleted={isCompleted}>{title}</S.StyledTypography>
        )}
      </S.StyledTaskBox>
      <S.StyledActionBox>
        <S.StyledIconButton onClick={handleEditSaveClick}>
          {isEditing ? <SaveIcon fontSize='large' /> : <EditIcon fontSize='large' />}
        </S.StyledIconButton>

        <S.StyledIconButton aria-label='delete' onClick={handleDelete(id)}>
          <DeleteIcon fontSize='large' />
        </S.StyledIconButton>
      </S.StyledActionBox>
    </S.StyledListItem>
  )
}
