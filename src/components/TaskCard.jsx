import React, { useContext, useState } from 'react'
import CardElement from './CardElement'
import CardEdit from './CardEdit'

export default function TaskCard({ task }) {
  const [isEdit, setIsEdit] = useState(false)

  const toggleEdit = () => {
    setIsEdit(!isEdit)
  }

  return (
    <div
      className={`${task.complete ? 'bg-emerald-800' : 'bg-gray-800'} text-white p-4 rounded-md`}>
      {isEdit ? (
        <CardEdit
          task={task}
          toggleEdit={toggleEdit}
        />
      ) : (
        <CardElement
          task={task}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  )
}
