import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConnectPage from './pages/ConnectPage'
import OrderPage from './pages/OrderPage'
import ErrorPage from './pages/ErrorPage'


export default function App() {


  return (
    <Routes>
      <Route path="/" element={<ConnectPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

