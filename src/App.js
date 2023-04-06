import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuardRoutes from "./utils/GuardRoutes";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/Logout";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Message from "./pages/Message";
import ForgotPassword from "./pages/ForgotPassword";
import CartPage from "./pages/CartPage";
import ExamLibrary from "./pages/ExamLibrary";
import { AuthProvider } from "./context/AuthContext";
import TestPage from "./pages/testPage";
import Exams from "./pages/Exams";
import ExamIntroduction from "./pages/ExamIntroduction";
import Answer from "./pages/Answer.js";

function App() {
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<GuardRoutes />}>
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/exam/:exam_id" element={<Exams />} />
            <Route path="/answer/:exam_id" element={<Answer />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/exam-library" element={<ExamLibrary />} />
          <Route
            path="/introduction/:exam_id"
            element={<ExamIntroduction />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Forgot-Password" element={<ForgotPassword />} />

          <Route path="/message" element={<Message />} />

          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
