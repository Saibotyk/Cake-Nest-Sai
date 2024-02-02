import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConnectPage from './pages/ConnectPage'
import OrderPage from './pages/OrderPage'
import ErrorPage from './pages/ErrorPage'
import { useState } from 'react'
import AdminContext from './context/AdminContext';




export default function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  const adminContextValue = {
    isAdmin,
    setIsAdmin
  }


  return (
    <AdminContext.Provider value={adminContextValue}>
      <Routes>
        <Route path="/" element={<ConnectPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AdminContext.Provider>
  )
}



