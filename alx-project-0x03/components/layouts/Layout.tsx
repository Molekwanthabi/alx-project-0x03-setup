import React from "react";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        © 2024 My App — All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
