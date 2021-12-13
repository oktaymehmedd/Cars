import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import MyCarsPage from "./pages/MyCarsPage";
import CreateCarPage from "./pages/CreateCarPage";
import UpdateCarPage from "./pages/UpdateCarPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:id" element={<CarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post-car" element={<CreateCarPage />} />
          <Route path="/cars/:id/edit" element={<UpdateCarPage />} />
          <Route path="/my-cars" element={<MyCarsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
