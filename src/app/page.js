"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl w-full">
        {/* Left Message Box */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Welcome to Quiz Builder</h1>
          <p className="text-gray-600 mb-6">
            <span className="font-semibold">Login or Register</span> first to
            participate in quiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/auth/login">
              <Button variant="default">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        </div>

        {/* Right Section (Optional Visual/Illustration) */}
        <div className="flex-1 hidden md:block">
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="Quiz Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
