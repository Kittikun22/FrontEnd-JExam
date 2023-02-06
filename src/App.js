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
import Products from "./pages/Products";
import { AuthProvider } from "./context/AuthContext";
import TestPage from "./pages/testPage";
import ProductIntroduction from "./pages/ProductIntroduction";
import Exams from "./pages/Exams";
import ExamIntroduction from "./pages/ExamIntroduction";
import Takeanexam from "./pages/Takeanexam";
import Answer from "./pages/Answer";

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
            <Route
              path="/exam-introduction/:productId"
              element={<ExamIntroduction />}
            />
            <Route path="/exam/:productId" element={<Exams />} />
            <Route
              path="/takeanexam/netsat/:subject"
              element={<Takeanexam />}
            />
            <Route path="/answer/:productId" element={<Answer />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/exam-library" element={<Products />} />
          <Route
            path="/introduction/:productID"
            element={<ProductIntroduction />}
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
