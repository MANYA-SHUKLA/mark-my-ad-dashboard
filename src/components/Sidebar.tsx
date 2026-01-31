"use client";

import {
  LayoutDashboard,
  ChevronDown,
  CheckSquare,
  Calendar,
  BarChart3,
  Folder,
  Megaphone,
  Users,
  HelpCircle,
  Settings,
  X,
  Plus,
} from "lucide-react";

const taskItems = [
  { name: "My Tasks", icon: CheckSquare },
  { name: "Task Calendar", icon: Calendar },
  { name: "Task Reports", icon: BarChart3 },
  { name: "Task Portfolio", icon: Folder },
];

const campaigns = [
  { name: "Campaign 1 - xyz", dotColor: "bg-blue-500" },
  { name: "Campaign 2 - xyz", dotColor: "bg-[#8B5CF6]" },
  { name: "Campaign 3 - xyz", dotColor: "bg-[#FB923C]" },
  { name: "Campaign - xyz", dotColor: "bg-gray-500" },
];

const menuItemClass =
  "flex min-h-[44px] items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/90 transition-transform hover:bg-[#160E77] active:bg-[#160E77] active:scale-[0.98] sm:min-h-0 sm:gap-3 sm:px-4 sm:py-3";
const activeItemClass =
  "flex min-h-[44px] items-center gap-2 rounded-xl bg-[#160E77] px-3 py-2.5 text-sm text-white shadow-inner sm:min-h-0 sm:gap-3 sm:px-4 sm:py-3";

export default function Sidebar({
  onClose,
  showCloseButton = false,
}: {
  onClose?: () => void;
  showCloseButton?: boolean;
}) {
  return (
    <aside className="flex h-full min-h-0 w-full min-w-0 shrink-0 flex-col bg-[#160E77] text-white opacity-100 transition-[width] duration-300 ease-out md:min-w-[220px] lg:min-w-[250px] lg:hover:w-[260px]">
      <div className="flex items-center justify-between border-t-2 border-red-500 px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex min-w-0 items-center gap-0 tracking-tight">
          <span className="text-lg font-bold sm:text-xl">MARK MY</span>
          <span className="ml-1 rounded bg-red-500 px-1 py-0.5 text-lg font-bold text-white sm:px-1.5 sm:text-xl">
            AD
          </span>
        </div>
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-white/90 transition-all duration-200 hover:scale-105 hover:bg-[#160E77] active:bg-[#160E77] active:scale-95 md:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto py-3 sm:py-4">
        <div className="px-2 sm:px-3">
          <button
            type="button"
            className={`w-full ${menuItemClass}`}
          >
            <LayoutDashboard className="h-5 w-5 shrink-0" />
            <span>Task Dashboard</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 pl-0">
            {taskItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  type="button"
                  className={i === 0 ? `w-full ${activeItemClass}` : `w-full ${menuItemClass}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-2 px-2 sm:px-3">
          <button type="button" className={`w-full ${menuItemClass}`}>
            <Megaphone className="h-5 w-5 shrink-0" />
            <span>Campaign</span>
            <Plus className="ml-auto h-4 w-4 shrink-0" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 pl-0">
            {campaigns.map((c) => (
              <button
                key={c.name}
                type="button"
                className={`w-full ${menuItemClass}`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${c.dotColor}`} />
                <span className="flex-1">{c.name}</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 px-2 sm:px-3">
          <button type="button" className={`w-full ${menuItemClass}`}>
            <Users className="h-5 w-5 shrink-0" />
            <span>Team</span>
            <Plus className="ml-auto h-4 w-4 shrink-0" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 pl-0">
            <button type="button" className={`w-full ${activeItemClass}`}>
              <span className="flex-1">All Team</span>
            </button>
            <button type="button" className={`w-full ${menuItemClass}`}>
              <span className="flex-1">Campaign 1 Team</span>
              <ChevronDown className="h-4 w-4 shrink-0" />
            </button>
          </div>
        </div>
      </nav>

      <div className="px-2 py-2 sm:px-3 sm:py-3">
        <button type="button" className={`w-full ${menuItemClass}`}>
          <Settings className="h-4 w-4 shrink-0" />
          <span>Settings</span>
        </button>
        <button type="button" className={`w-full ${menuItemClass}`}>
          <HelpCircle className="h-4 w-4 shrink-0" />
          <span>Supports</span>
        </button>
      </div>
    </aside>
  );
}
