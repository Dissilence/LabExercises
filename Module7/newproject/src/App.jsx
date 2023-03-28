import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnlineChat from './components/OnlineChat'
import WindowResizer from './components/WindowResizer'
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext'
import Clock from './components/Clock'
import AppRoutes from './Routes/AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import EmojiClick from "./components/Emoji"
import SimpleDialog from './components/SimpleDialogDemo'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage'

function App() {

  return (
    <div className="App">
      <ThemeProvider> { /* allow all child components to use the Theme context */ }
      
        <UserProvider>
        <NavBar/>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
        <AppRoutes/>
        </ErrorBoundary>

          <Clock/>
          <SimpleDialog/>
          <WindowResizer />

          <OnlineChat />
          <EmojiClick/>
          <Footer/>
        </UserProvider>
      </ThemeProvider>

    </div>
    
  )
}

export default App