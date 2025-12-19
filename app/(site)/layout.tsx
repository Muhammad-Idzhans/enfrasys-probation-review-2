"use client";

import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../globals.css';

export default function SiteLayout({ children }: { children: React.ReactNode}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="d-flex flex-grow-1 content-wrapper position-relative">
        <Sidebar isOpen={menuOpen} onMenuClick={() => setMenuOpen(false)} />
        <main className="content-wrapper w-100 children-bg p-5">
            {children}
            <div className="d-flex align-items-center justify-content-center">
              <Footer />
            </div>
            
        </main>
      </div>
      
    </div>
  );
}
