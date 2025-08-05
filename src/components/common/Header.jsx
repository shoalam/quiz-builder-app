"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("quiz_logged_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("quiz_logged_user");
    router.push("/auth/login");
  };

  return (
    <header className="w-full bg-white border-b shadow-sm px-6 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Role-based title */}
      <h1 className="text-xl font-semibold text-gray-800">
        {user?.role === "user" ? "User Dashboard" : "Admin Dashboard"}
      </h1>

      {/* Right: User info + Logout */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                {user.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700">{user.name}</span>
          </div>
        )}
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
