import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div className="lg:ml-[19rem]">

        <Header
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}