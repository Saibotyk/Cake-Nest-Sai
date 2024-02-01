import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConnectPage from './pages/ConnectPage'
import OrderPage from './pages/OrderPage'
import ErrorPage from './pages/ErrorPage'
import { useState } from 'react'



export default function App() {
  const [isAdmin, setIsAdmin] = useState(false)


  return (
    <Routes>
      <Route path="/" element={<ConnectPage />} />
      <Route path="/order/:username" element={<OrderPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}



