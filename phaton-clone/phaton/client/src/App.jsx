import React from "react";

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CategoriesWrapper from "./components/CategoriesWrapper.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoriesWrapper />
      <Footer /> 
    </div>
  )
}
