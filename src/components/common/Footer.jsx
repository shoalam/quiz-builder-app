import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-2 px-4">
      <p className="text-center text-gray-600">
        Copyright © {new Date().getFullYear()} | Quiz Builder
      </p>
    </footer>
  );
}
