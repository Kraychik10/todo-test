import { ChangeEvent, FC, MouseEvent, useState } from 'react'

import { errors, MAX_LENGTH } from '@model/index'
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
      setError(errors.TASK_TITLE_REQUIRED)
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (inputValue.length > MAX_LENGTH) {
      setError(errors.TASK_LENGTH)
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
            helperText={`${newTitle.length}/${MAX_LENGTH}`}
            onChange={handleChange}
            size='small'
            value={newTitle}
          />
        ) : (
          <S.StyledTypography isCompleted={isCompleted}>{title}</S.StyledTypography>
        )}
      </S.StyledTaskBox>
      <S.StyledActionBox>
        <S.StyledIconButton onClick={handleEditSaveClick}>{isEditing ? <SaveIcon /> : <EditIcon />}</S.StyledIconButton>

        <S.StyledIconButton onClick={handleDelete(id)}>
          <DeleteIcon />
        </S.StyledIconButton>
      </S.StyledActionBox>
    </S.StyledListItem>
  )
}
