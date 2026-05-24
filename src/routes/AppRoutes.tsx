import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/pages/Home";
import About from "../views/pages/About";
import Sectors from "../views/pages/Sectors";
import Maritime from "../views/pages/Maritime";
import MeatImport from "../views/pages/MeatImport";
import Cement from "../views/pages/Cement";
import HSE from "../views/pages/HSE";
import Contact from "../views/pages/Contact";

// Helper component to scroll to top of window on path changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/sectors/maritime" element={<Maritime />} />
        <Route path="/sectors/meat" element={<MeatImport />} />
        <Route path="/sectors/cement" element={<Cement />} />
        <Route path="/hse" element={<HSE />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route back to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
