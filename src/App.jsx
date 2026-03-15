import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";
import FeaturesPage from "./Pages/FeaturesPage";
import ServicesPage from "./Pages/ServicesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import FaqPage from "./Pages/FaqPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import AdminHomePage from "./Pages/Admin/AdminHomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        {/* <Route path="features" element={<FeaturesPage />} /> */}
        <Route path="services" element={<ServicesPage />} />
        <Route path="testimonials" element={<TestimonialPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contactus" element={<ContactUsPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHomePage />} />

        <Route path="" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
