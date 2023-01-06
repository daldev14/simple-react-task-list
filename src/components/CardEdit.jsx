import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function CardEdit({ task, toggleEdit }) {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const { updateTask } = useContext(TaskContext)

  useEffect(() => {
    setNewTitle(task.title)
    setNewDescription(task.description)
  }, [])

  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setNewDescription(event.target.value)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    updateTask({ id: task.id, title: newTitle, description: newDescription })
    toggleEdit()
  }

  const handleCancelar = () => {
    toggleEdit()
  }

  return (
    <form action=''>
      <input
        type='text'
        placeholder='Ingrese el título de la tarea'
        onChange={handleChangeTitle}
        value={newTitle}
        className='bg-slate-300 p-3 w-full mb-2 focus:outline-none text-black'
      />
      <textarea
        placeholder='Ingrese la descripción de la tarea'
        onChange={handleChangeDescription}
        value={newDescription}
        className='bg-slate-300 p-3 w-full mb-2 focus:outline-none text-black'></textarea>
      <button
        type='submit'
        onClick={handleEdit}
        className='bg-indigo-500 hover:bg-indigo-400 px-2 py-1 rounded-md mr-2 '>
        Actualizar
      </button>
      <button
        onClick={handleCancelar}
        className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400'>
        Cancelar
      </button>
    </form>
  )
}
