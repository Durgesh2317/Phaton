import React from "react";
import { gethomepageData } from "./services/DataService";
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from "./components/Footer.jsx";
import CategoriesWrapper from "./components/CategoriesWrapper.jsx";


export default function App() {
  const data = gethomepageData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoriesWrapper />
      <Footer /> 
    </div>
  )
}
