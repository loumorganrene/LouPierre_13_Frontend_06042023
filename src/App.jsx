import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import Error from './pages/Error'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>

              {/* Public Routes : */}
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />

              {/* Protected Routes : */}
              <Route element={<ProtectedRoute />}>
                <Route path='profile' element={<Profile />} />
              </Route>

              <Route path="*" element={<Error />} />
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
