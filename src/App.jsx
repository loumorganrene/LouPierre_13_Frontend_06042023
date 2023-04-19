import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <>
    <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </div>
    </Router>
    
    </>

  );
}

export default App
