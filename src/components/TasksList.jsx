import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'

export default function TasksList() {
  const { tasks, complete } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
  }

  return (
    <div>
      <p className='text-slate-400'>
        Tareas completas {complete}/{tasks.length}
      </p>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-2'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  )
}
