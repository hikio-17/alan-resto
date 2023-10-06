import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ToastMessage ({ message }) {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  })
  return (
    <div>
      <ToastContainer />
    </div>
  )
}
export default ToastMessage
