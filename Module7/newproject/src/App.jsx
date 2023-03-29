import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnlineChat from './components/OnlineChat'
import WindowResizer from './components/WindowResizer'
import { MyThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext'
import Clock from './components/Clock'
import AppRoutes from './Routes/AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import EmojiClick from "./components/Emoji"
import SimpleDialog from './components/SimpleDialogDemo'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage'
import { ThemeProvider } from "@mui/material/styles"
import { purpleTheme } from './theme/PurpleTheme'
import NavbarMui from './components/NavMui'

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={purpleTheme}>
        <UserProvider>
        <NavbarMui/>
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