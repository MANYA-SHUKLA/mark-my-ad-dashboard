"use client";

import { type ReactNode } from "react";

const cardClass =
  "rounded-xl border border-[#E6E8F0] bg-white p-5 shadow-sm animate-fade-in";

export default function DashboardCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`${cardClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
