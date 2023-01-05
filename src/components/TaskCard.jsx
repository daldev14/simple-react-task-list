import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function TaskCard({ task }) {
  const { deleteTask, completeTask } = useContext(TaskContext)

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleComplete = () => {
    completeTask(task.id)
  }

  return (
    <div
      className={`${task.complete ? 'bg-emerald-800' : 'bg-gray-800'} text-white p-4 rounded-md`}
    >
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <div className="mt-4">
        <button
          className={`${
            task.complete
              ? 'bg-yellow-500 hover:bg-yellow-400'
              : 'bg-indigo-500 hover:bg-indigo-400'
          }  px-2 py-1 rounded-md mr-2 `}
          onClick={handleComplete}
        >
          {task.complete ? 'Incompleta' : 'Completa'}
        </button>
        <button
          className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
