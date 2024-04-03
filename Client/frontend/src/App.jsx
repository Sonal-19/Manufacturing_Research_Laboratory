import React from 'react'
import "../src/App.css"
import { Outlet } from 'react-router'

function App() {


  return (
    <div className='font-ubuntu'>
      <Outlet/>
    </div>
  )
}

export default App
