import { useState } from 'react'
import './App.css'
import LoginComponent from './LoginComponent'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginComponent />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
      
    </div>
  )
}

export default App
