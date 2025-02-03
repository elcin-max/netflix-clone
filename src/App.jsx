import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import  UserProfile from './pages/UserProfile.jsx'
import Layout from './components/Layout.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route  element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/user/:userId' element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
