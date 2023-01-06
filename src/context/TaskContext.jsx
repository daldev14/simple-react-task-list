import { createContext, useState, useEffect } from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const tareas = [
    {
      id: 0,
      title: 'Tarea 1',
      description: 'Descripción 1',
      complete: false,
    },
    {
      id: 1,
      title: 'Tarea 2',
      description: 'Descripción 2',
      complete: false,
    },
  ]
  const [tasks, setTasks] = useState(tareas)
  const [complete, setComplete] = useState(0)

  useEffect(() => {
    // setTasks(tareas)
    setComplete(tasks.filter((task) => task.complete === true).length)
  }, [tasks])

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
        complete: false,
      },
    ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task
        return {
          ...task,
          complete: !task.complete,
        }
      })
    )
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        completeTask,
        complete,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
