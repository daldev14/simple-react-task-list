import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import Proptypes from 'prop-types'

CardElement.propTypes = {
  task: Proptypes.object.isRequired,
  toggleEdit: Proptypes.func.isRequired,
}

export default function CardElement({ task, toggleEdit }) {
  const { deleteTask, completeTask } = useContext(TaskContext)

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleComplete = () => {
    completeTask(task.id)
  }

  const handleEdit = () => {
    toggleEdit()
  }

  return (
    <>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <div className='mt-4'>
        <button
          className={`${
            task.complete
              ? 'bg-indigo-500 hover:bg-indigo-400'
              : 'bg-emerald-500 hover:bg-emerald-400'
          }  px-2 py-1 rounded-md mr-2`}
          onClick={handleComplete}>
          {task.complete ? 'Incompleta' : 'Completa'}
        </button>
        <button
          onClick={handleEdit}
          className='bg-yellow-500 hover:bg-yellow-400 px-2 py-1 rounded-md mr-2'>
          Editar
        </button>
        <button
          className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400'
          onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </>
  )
}
