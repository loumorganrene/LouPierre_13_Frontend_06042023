import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App({ children }) {
  return (
    <div className="App">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default App
