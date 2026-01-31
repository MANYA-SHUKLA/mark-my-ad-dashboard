"use client";

import { Search, Bell, ChevronDown, Menu } from "lucide-react";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 flex w-full max-w-full shrink-0 flex-wrap items-center justify-between gap-2 overflow-hidden bg-[#160E77] px-3 py-2.5 text-white tracking-tight sm:gap-3 sm:px-4 sm:py-3 md:gap-4 md:px-5 md:py-3.5 lg:px-6 lg:py-4 xl:px-8 xl:py-5">
      <div className="flex min-w-0 flex-1 basis-0 items-center gap-2 sm:gap-3 md:gap-4">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white/90 transition-all duration-200 hover:scale-105 hover:bg-[#3B2A9F] active:scale-95 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}
        <div className="relative hidden min-w-0 flex-1 sm:block sm:max-w-[120px] md:max-w-[140px] lg:max-w-[200px] xl:max-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 shrink-0 text-white sm:left-4 lg:left-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full min-w-0 rounded-full border-0 bg-[#160E77] py-2 pl-9 pr-3 text-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:pl-10 sm:pr-4 lg:px-5 lg:pl-12"
          />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        <button
          type="button"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/90 transition-transform hover:scale-105 hover:bg-[#3B2A9F] active:scale-95 sm:h-10 sm:w-10"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-white sm:h-5 sm:w-5" />
          <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-red-500 sm:right-1 sm:top-1 sm:h-2 sm:w-2" aria-hidden />
        </button>
        <button
          type="button"
          className="flex min-w-0 items-center gap-1.5 rounded-xl px-1 py-1.5 text-white/90 transition-transform hover:scale-105 hover:bg-[#3B2A9F] active:scale-95 sm:gap-2 sm:px-2"
        >
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="Maxbert"
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white object-cover bg-white/20 sm:h-9 sm:w-9"
          />
          <span className="hidden min-w-0 truncate text-sm font-medium sm:inline sm:max-w-[80px] md:max-w-[100px] lg:max-w-none">
            Maxbert
          </span>
          <ChevronDown className="h-4 w-4 shrink-0" />
        </button>
      </div>
    </header>
  );
}
