import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HeaderApp from './components/HeaderApp'
import Food from './pages/Food';
import Transaction from './pages/Transaction';
import AddMenu from './pages/AddMenu';
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <ToastContainer />
      <header>
        <HeaderApp />
      </header>

      <main className='bg-body-tertiary h-100'>
        <Routes>
          <Route path='/' element={<Transaction />} />
          <Route path='/foods' element={<Food />} />
          <Route path='/add-food' element={<AddMenu />} />
        </Routes>
      </main>

      <footer className='bg-body-tertiary text-center'>
        <span>Alan Resto &copy; 2020 | Developed by Alan Creative</span>
      </footer>
    </>
  )
}

export default App
