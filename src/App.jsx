import HomePage from "./Compenents/landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Compenents/landing_page/signup/SignUpPage";
import AboutPage from "./Compenents/landing_page/about/AboutPage";
import ProductsPage from "./Compenents/landing_page/products/ProductsPage";
import PricingPage from "./Compenents/landing_page/pricing/PricingPage";
import SupportPage from "./Compenents/landing_page/support/SupportPage";
import Navbar from "./Compenents/landing_page/Navbar";
import Footer from "./Compenents/landing_page/Footer";
import NotFound from "./Compenents/landing_page/NotFound";
import LoginPage from "./Compenents/landing_page/login/LoginPage";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
