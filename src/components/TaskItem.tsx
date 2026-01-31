"use client";

import { Link2, Flag } from "lucide-react";

export type TaskItemData =
  | { path: string; task: string; time: string }
  | {
      text: string;
      time: string;
      suffix?: string;
      flag?: boolean;
    };

export default function TaskItem({ item }: { item: TaskItemData }) {
  return (
    <li className="flex min-w-0 items-start justify-between gap-2 py-2 first:pt-0 last:pb-0 sm:items-center sm:py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {"path" in item ? (
          <>
            <span className="block truncate text-xs text-[#6B7280] sm:text-sm">{item.path}</span>
            <div className="flex min-w-0 items-center gap-1.5 text-xs text-[#1F2937] sm:gap-2 sm:text-sm">
              <div className="h-3.5 w-3.5 shrink-0 rounded border border-[#E6E8F0] sm:h-4 sm:w-4" />
              <span className="truncate">{item.task}</span>
              <Link2 className="h-3.5 w-3.5 shrink-0 text-[#9CA3AF] sm:h-4 sm:w-4" />
            </div>
          </>
        ) : (
          <span className="text-xs text-[#1F2937] sm:text-sm">
            {item.text}
            {item.flag && (
              <span className="ml-1 inline-flex items-center gap-1">
                <Flag className="h-3.5 w-3.5 text-red-500 sm:h-4 sm:w-4" />
                {item.suffix}
              </span>
            )}
          </span>
        )}
      </div>
      <span className="shrink-0 text-xs text-[#9CA3AF]">{item.time}</span>
    </li>
  );
}
