import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { gethomepageData } from "./services/DataService";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from "./components/Footer.jsx";
import CategoriesWrapper from "./components/CategoriesWrapper.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DashboardOrder from "./components/DashboardOrder.jsx";
import DashboardProduct from "./components/DashboardProduct.jsx";
import AnalyticsDashboard from "./components/AnalyticsDashboard.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import DescriptionPage from "./components/DescriptionPage.jsx";



export default function App() {
  const data = gethomepageData();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <Hero />
              <CategoriesWrapper />
              <Footer />
            </div>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Order" element={<DashboardOrder />} />
        <Route path="/DashboardProduct" element={<DashboardProduct />} />
        <Route path="/Analytics" element={<AnalyticsDashboard />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/description" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
