import './App.css';
import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuardRoutes from './utils/GuardRoutes';
import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import Logout from './components/Logout';
import Profile from './pages/Profile'
import Checkout from './pages/Checkout';
import Message from './pages/Message';
import ForgotPassword from './pages/ForgotPassword';
import CartPage from './pages/CartPage';
import Exams from './pages/Exams';
import { AuthProvider } from './context/AuthContext';
import TestPage from './pages/testPage';
import ExamsIntroduction from './pages/ExamsIntroduction';

function App() {

  // useEffect(() => {
  //   const ciphertext = JSON.parse(localStorage.getItem("users"))
  //   if (ciphertext) {
  //     const bytes = CryptoJS.AES.decrypt(ciphertext, EncryptSecret);
  //     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //     setisAuth(decryptedData)
  //   }
  // }, [])

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<GuardRoutes />} >
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/introduction/:productID" element={<ExamsIntroduction />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path='/exam-library' element={<Exams />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path='/Forgot-Password' element={<ForgotPassword />} />

          <Route path='/message' element={<Message />} />

          <Route path='/testpage' element={<TestPage />} />


        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;