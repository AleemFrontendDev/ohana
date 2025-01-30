"use client";

import React, { useEffect, useState } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", members: 100, savings: 600, loans: 400 },
  { month: "Feb", members: 120, savings: 650, loans: 450 },
  { month: "Mar", members: 150, savings: 630, loans: 420 },
  { month: "Apr", members: 170, savings: 680, loans: 470 },
  { month: "May", members: 190, savings: 650, loans: 440 },
  { month: "Jun", members: 210, savings: 690, loans: 480 },
  { month: "Jul", members: 230, savings: 670, loans: 460 },
  { month: "Aug", members: 250, savings: 700, loans: 490 },
  { month: "Sep", members: 300, savings: 660, loans: 470 },
  { month: "Oct", members: 110, savings: 680, loans: 480 },
  { month: "Nov", members: 280, savings: 650, loans: 460 },
  { month: "Dec", members: 120, savings: 670, loans: 470 },
];


const COLORS = {
  loans: "#3B82F6",
  savings: "#22C55E",
  members: "#FFA500",
};



const StyledAreaChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLoans" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Chart content */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="loans"
              stackId="1"
              stroke="#3B82F6"
              fill="url(#colorLoans)"
            />
            <Area
              type="monotone"
              dataKey="savings"
              stackId="1"
              stroke="#22C55E"
              fill="url(#colorSavings)"
            />
            
            <Area
              type="monotone"
              dataKey="members"
              stackId="1"
              stroke="#FFA500"
              fill="url(#colorMembers)"
            />
          </AreaChart>
        </ResponsiveContainer>
    </>
  );
}

export default StyledAreaChart