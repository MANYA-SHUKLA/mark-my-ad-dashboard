"use client";

import {
  LayoutDashboard,
  ChevronDown,
  CheckSquare,
  Calendar,
  BarChart3,
  Briefcase,
  Megaphone,
  Users,
  HelpCircle,
  Settings,
} from "lucide-react";

const taskItems = [
  { name: "My Tasks", icon: CheckSquare },
  { name: "Task Calendar", icon: Calendar },
  { name: "Reports", icon: BarChart3 },
  { name: "Portfolio", icon: Briefcase },
];

const campaigns = [
  { name: "Campaign 1", color: "bg-blue-400" },
  { name: "Campaign 2", color: "bg-purple-400" },
  { name: "Campaign 3", color: "bg-orange-400" },
];

export default function LeftSidebar() {
  return (
    <aside className="flex h-full w-[250px] shrink-0 flex-col bg-indigo-900 text-white">
      <div className="border-b border-indigo-800 px-4 py-4">
        <div className="flex items-center gap-0">
          <span className="text-base font-bold">MARK MY</span>
          <span className="ml-1 rounded bg-red-500 px-1.5 py-0.5 text-base font-bold">
            AD
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 py-4">
        <div className="px-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-indigo-700">
            <LayoutDashboard className="h-5 w-5 shrink-0" />
            <span>Task Dashboard</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 border-l border-indigo-700 pl-4">
            {taskItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-indigo-700 ${
                    i === 0 ? "bg-indigo-800" : ""
                  }`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-2 px-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-indigo-700">
            <Megaphone className="h-5 w-5 shrink-0" />
            <span>Campaigns</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 border-l border-indigo-700 pl-4">
            {campaigns.map((c) => (
              <button
                key={c.name}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-indigo-700"
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.color}`}
                />
                <span className="flex-1">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 px-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-indigo-700">
            <Users className="h-5 w-5 shrink-0" />
            <span>Team</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </button>
          <div className="ml-4 mt-0.5 space-y-0.5 border-l border-indigo-700 pl-4">
            <button className="flex w-full items-center gap-3 rounded-lg bg-indigo-800 px-3 py-2 text-left text-sm text-white hover:bg-indigo-700">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
              <span className="flex-1">All Team</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-indigo-700">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
              <span className="flex-1">Campaign 1 Team</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="border-t border-indigo-800 px-4 py-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-indigo-700">
          <Settings className="h-4 w-4 shrink-0" />
          <span>Settings</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-indigo-700">
          <HelpCircle className="h-4 w-4 shrink-0" />
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
}
