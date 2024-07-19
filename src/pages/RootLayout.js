import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet></Outlet>
    </>
  )
}

export default RootLayout