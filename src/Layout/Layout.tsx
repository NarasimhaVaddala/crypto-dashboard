import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="font-primary font-medium px-2 py-2 text-secondary">
      <Header setSidebarOpen={setSidebarOpen} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="p-2  mt-[80px]">
        <Outlet />
      </div>
    </main>
  );
}
