"use client";

import { Share2, Plus, type LucideIcon } from "lucide-react";

export type Tab = { name: string; icon: LucideIcon; active?: boolean };

export default function TabBar({
  tabs,
  shareTaskLabel,
  newTaskLabel,
  onShareTask,
  onNewTask,
}: {
  tabs: Tab[];
  shareTaskLabel?: string;
  newTaskLabel?: string;
  onShareTask?: () => void;
  onNewTask?: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-[#E6E8F0] pb-3 sm:flex-row sm:items-center sm:justify-between sm:pb-4 tracking-tight">
      <div className="relative flex gap-3 overflow-x-auto pb-1 sm:gap-6 sm:pb-0 [-webkit-overflow-scrolling:touch]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              type="button"
              className={`flex shrink-0 items-center gap-1.5 rounded-t-xl pb-2 pt-0.5 text-xs transition-colors sm:gap-2 sm:text-sm ${
                tab.active
                  ? "border-b-2 border-orange-500 text-black font-medium"
                  : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              {tab.name}
            </button>
          );
        })}
      </div>
      {shareTaskLabel != null && newTaskLabel != null && (
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={onShareTask}
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#1F2937] transition-all duration-200 hover:bg-gray-50"
          >
            <Share2 className="h-5 w-5 shrink-0" />
            {shareTaskLabel}
          </button>
          <button
            type="button"
            onClick={onNewTask}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A4C] to-[#FF6A3D] px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105"
          >
            <Plus className="h-5 w-5 shrink-0" />
            {newTaskLabel}
          </button>
        </div>
      )}
    </div>
  );
}
