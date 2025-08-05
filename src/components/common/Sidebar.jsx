"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  PlusCircle,
  ListChecks,
  Users,
  LogOut,
} from "lucide-react";

export default function Sidebar({ role }) {
  const pathname = usePathname();

  // 👇 Define admin routes
  const adminLinks = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      label: "Create Quiz",
      href: "/admin/dashboard/quiz/add",
      icon: <PlusCircle className="w-4 h-4" />,
    },
    {
      label: "Quiz List",
      href: "/admin/dashboard/quiz/list",
      icon: <ListChecks className="w-4 h-4" />,
    },
    {
      label: "Users",
      href: "/admin/dashboard/users",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  const userLinks = [
    {
      label: "Dashboard",
      href: "/user/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      label: "Available Quizzes",
      href: "/user/quizzes",
      icon: <ListChecks className="w-4 h-4" />,
    },
    {
      label: "Quiz History",
      href: "/user/history",
      icon: <ListChecks className="w-4 h-4" />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("quiz_logged_user");
    window.location.href = "/login";
  };

  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <aside className="h-[calc(100vh-49px)] w-64 bg-white border-r shadow-sm flex flex-col justify-between">
      <div>
        {/* Logo / Title */}
        <div className="px-6 py-4 border-b">
          <h1 className="text-lg font-bold">Quiz Builder</h1>
          <p className="text-sm text-muted-foreground capitalize">
            {role} panel
          </p>
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
                pathname === link.href
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-4 py-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
