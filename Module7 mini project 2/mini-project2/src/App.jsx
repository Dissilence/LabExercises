import { useState } from 'react'
import './App.css'
import NavBarMUI from './components/NavBarMUI'
import AppRoutes from './Routes/AppRoutes'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <NavBarMUI/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App