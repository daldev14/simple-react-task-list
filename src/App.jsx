import React from 'react'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

export default function App() {
  return (
    <main className='bg-zinc-900 h-screen flex font-poppins'>
      <TaskForm />
      <div className='container w-[70%] p-4 overflow-auto'>
        <TasksList />
      </div>
    </main>
  )
}
