import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import Footer from "./views/components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-navy-950 font-sans selection:bg-gold-500 selection:text-navy-950">
        
        {/* Persistent Luxury Navigation header */}
        <Navbar />

        {/* Core dynamic content main frame */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Persistent corporate deep Footer */}
        <Footer />
        
      </div>
    </HashRouter>
  );
}
