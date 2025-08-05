import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import React from "react";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar role="user" />
        <main className="bg-gray-50 flex flex-col flex-1">
          <div className="p-6 flex-1">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
}
