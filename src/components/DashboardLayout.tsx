"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <div
        role="presentation"
        aria-hidden={!sidebarOpen}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="grid min-h-screen min-w-0 max-w-[100vw] grid-cols-1 grid-rows-[auto_auto_1fr] md:grid-cols-[220px_1fr] md:grid-rows-[auto_1fr] lg:grid-cols-[250px_1fr]">
        <div
          className="order-2 h-0 min-h-0 min-w-0 md:order-1 md:col-start-1 md:h-auto md:row-span-2 md:row-start-1"
        >
          <div
            className={`fixed inset-y-0 left-0 z-50 w-[min(250px,85vw)] max-w-[250px] transform transition-transform duration-200 ease-out md:relative md:inset-auto md:h-full md:w-full md:max-w-none md:translate-x-0 md:transform-none ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-full min-h-0 overflow-y-auto overflow-x-visible">
              <Sidebar
                onClose={() => setSidebarOpen(false)}
                showCloseButton={sidebarOpen}
              />
            </div>
          </div>
        </div>

        <div className="order-1 min-w-0 md:col-start-2 md:row-start-1 lg:col-span-1">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <div className="order-3 min-h-0 min-w-0 overflow-auto md:col-start-2 md:row-start-2">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
