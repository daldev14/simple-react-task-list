import React, { useContext, useState } from 'react'

import { TaskContext } from '../context/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTitle('')
    setDescription('')
    createTask({
      title,
      description,
    })
  }

  return (
    <div className='p-4 w-[30%]'>
      <h1 className='text-4xl font-bold text-white text-center mb-2 uppercase'>Task List</h1>
      <form
        action=''
        onSubmit={handleSubmit}
        className='bg-slate-800 p-10 rounded-md'>
        <h2 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h2>
        <input
          type='text'
          placeholder='Ingrese el título de la tarea'
          onChange={handleChangeTitle}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2 focus:outline-none'
        />
        <textarea
          placeholder='Ingrese la descripción de la tarea'
          onChange={handleChangeDescription}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2 focus:outline-none'></textarea>
        <button
          type='submit'
          className='bg-indigo-500 px-3 py-1 text-white'>
          Guardar
        </button>
      </form>
    </div>
  )
}
