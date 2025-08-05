import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import React from "react";
import "@/styles/dashboard.css";

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex max-h-[calc(100vh-49px)]">
        <Sidebar role="admin" />
        <main className="bg-gray-50 flex flex-col flex-1">
          <div className="p-6 flex-1 overflow-y-auto">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
}
