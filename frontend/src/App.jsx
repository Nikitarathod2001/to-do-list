import React from 'react';
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import RegisterLogin from './pages/RegisterLogin';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<RegisterLogin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
