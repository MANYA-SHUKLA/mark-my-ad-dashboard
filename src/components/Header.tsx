"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-6 bg-[#1e3a5f] px-6 text-white shadow-md">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-0">
          <span className="text-lg font-bold">MARK MY</span>
          <span className="ml-1 rounded bg-[#e74c3c] px-2 py-0.5 text-lg font-bold">
            AD
          </span>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-64 rounded-full border-0 bg-white pl-9 pr-4 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-xl p-2 text-white hover:bg-white/10"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-1 py-1.5 text-white hover:bg-white/10"
        >
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="Maxbert"
            width={32}
            height={32}
            className="h-8 w-8 overflow-hidden rounded-full object-cover ring-2 ring-white/20"
          />
          <span className="text-sm font-medium">Maxbert</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
