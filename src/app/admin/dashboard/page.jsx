"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function AdminDashboardHome() {
  const stats = [
    { title: "Total Quizzes", value: 12 },
    { title: "Total Questions", value: 87 },
    { title: "Total Users", value: 36 },
  ];

  const chartData = [
    { day: "Mon", attempts: 5 },
    { day: "Tue", attempts: 8 },
    { day: "Wed", attempts: 4 },
    { day: "Thu", attempts: 10 },
    { day: "Fri", attempts: 7 },
  ];

  // ✅ Define chartConfig before using it
  const chartConfig = {
    attempts: {
      label: "Quiz Attempts",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Quiz Attempts (Last 5 Days)</CardTitle>
            <CardDescription>Number of participants</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="aspect-w-16 aspect-h-9"
            >
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Legend />
                <Bar dataKey="attempts" fill="hsl(var(--chart-1))" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
