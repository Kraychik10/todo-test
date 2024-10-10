import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface Task {
  id: number
  title: string
  completed: boolean
}

interface TaskContextType {
  tasks: Task[]
  addTask: (title: string) => void
  editTask: (id: number, newTitle: string) => void
  deleteTask: (id: number) => void
  toggleTask: (id: number) => void
}

interface TaskContextProps {
  children: ReactNode
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

export const TaskProvider: FC<TaskContextProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const editTask = (id: number, newTitle: string) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleTask }}>{children}</TaskContext.Provider>
  )
}
