// import { createContext, useState } from 'react'
import './App.css'
import LogIn from './component/logIn/LogIn'
 import logo from './assets/image/החברה למתנסים.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { orange } from '@mui/material/colors';
const color = orange[500];

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ef6c00',//כתום
      dark: '##e65100',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ef6c00',//כתום
      dark: '#e65100',
      contrastText: '#000',
    },
  },
});



function App() {

  return (
    <>         
      <ThemeProvider theme={theme}>      
        <img src={logo} className='logo' />
        <h1 className='titles'> אפליקציה לניהול תקציבים</h1>
        <br></br>
        <LogIn ></LogIn>
      </ThemeProvider>
    </>
  )
}

export default App
