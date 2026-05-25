import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import Footer from "./views/components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen max-w-full flex-col overflow-x-clip bg-navy-950 font-sans selection:bg-gold-500 selection:text-navy-950">
        
        {/* Persistent Luxury Navigation header */}
        <Navbar />

        {/* Core dynamic content main frame */}
        <main className="min-w-0 flex-grow overflow-x-clip">
          <AppRoutes />
        </main>

        {/* Persistent corporate deep Footer */}
        <Footer />
        
      </div>
    </HashRouter>
  );
}
