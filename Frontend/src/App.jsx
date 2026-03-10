import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import theme from '../theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
function App() {
  

  return (
     <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='login' element={<Login /> } />
        </Routes>
     
      </Router>
      
     </ThemeProvider>
   
  )
}

export default App
