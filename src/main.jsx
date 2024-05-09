import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Principal from './Principal.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Counter from './components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <Footer />
    <Counter />
  </React.StrictMode>,
)
