import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Films from './Films'

function App() {

  return (
    <>
      <Header></Header>
      <h1>НОВИНКИ</h1>
      <div className='container'>
      <div className='line'></div>
      </div>
      <div className="inline-cont">
      <Films></Films>
      </div>
    </>
  )
}

export default App

