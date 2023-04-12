import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import Home from './pages/Home'
// import SignIn from './pages/SignIn'
// import Profile from './pages/Profile'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App children={<Home />} />
    </Provider>
  </React.StrictMode>
)
