"use client";
import { type ReactNode } from "react";
import DashboardCard from "./DashboardCard";

export default function BookmarkCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <DashboardCard className="min-w-0 flex-1">
      <div className="flex min-w-0 items-start gap-2 sm:gap-3">
        <div className="shrink-0 rounded-xl bg-[#F6F7FB] p-1.5 text-[#6B7280] sm:p-2">{icon}</div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3 className="truncate text-sm font-medium text-[#1F2937] sm:text-base">{title}</h3>
          <p className="mt-0.5 truncate text-xs text-[#6B7280] sm:mt-1 sm:text-sm">{description}</p>
        </div>
      </div>
    </DashboardCard>
  );
}
