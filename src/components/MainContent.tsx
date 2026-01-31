"use client";

import {
  CheckSquare,
  ListOrdered,
  Rss,
  Users,
  Clock,
  Globe,
  Filter,
  X,
  Link2,
  Calendar,
  ChevronDown,
  Share2,
  Plus,
} from "lucide-react";
import TabBar, { type Tab } from "@/components/TabBar";
import DashboardCard from "@/components/DashboardCard";
import BookmarkCard from "@/components/BookmarkCard";
import TaskItem, { type TaskItemData } from "@/components/TaskItem";
import AvatarGroup from "@/components/AvatarGroup";
import MemberList from "@/components/MemberList";

const tabs: Tab[] = [
  { name: "Overview", icon: CheckSquare, active: true },
  { name: "Priority", icon: ListOrdered, active: false },
  { name: "Feed", icon: Rss, active: false },
  { name: "Team", icon: Users, active: false },
  { name: "Timesheet", icon: Clock, active: false },
];

const teamSpaceItems: TaskItemData[] = [
  {
    path: "Team Space / Projects / Project 1",
    task: "Product Design",
    time: "11 mins",
  },
  { text: "You added the task to your priorities", time: "11 mins" },
];

const personalListItems: TaskItemData[] = [
  {
    path: "Personal List / Projects / Project 1",
    task: "Client Management Web App UI Design",
    time: "11 mins",
  },
  { text: "You added the task to your priorities", time: "14 mins" },
  { text: "You set assigned to: You", time: "18 mins" },
  {
    text: 'You set priority to "',
    suffix: "Normal",
    flag: true,
    time: "24 mins",
  },
  { text: "You set the due date to Today", time: "28 mins" },
];

const membersOnline = [
  { name: "Robin Wauters", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Allu Arjun", role: "Product Designer", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Nithes Rana", role: "Product Designer", avatar: "https://i.pravatar.cc/150?img=33" },
];

export default function MainContent() {
  return (
    <main className="flex flex-1 flex-col overflow-auto bg-white">
      <div className="flex flex-col gap-4 p-3 sm:gap-5 sm:p-4 md:gap-6 md:p-5 lg:p-6 tracking-tight">
        <div className="flex min-h-0 w-full min-w-0 flex-col justify-between gap-3 rounded-[4px] bg-white p-3 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:min-h-[152px] sm:gap-4 sm:p-4 md:p-5">
          <header className="flex w-full flex-wrap items-center justify-between gap-2 opacity-100 sm:gap-3">
            <h1 className="text-lg font-bold text-[#1F2937] sm:text-xl md:text-2xl">All Team</h1>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-[#1F2937] transition-all duration-200 hover:bg-gray-50 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm md:px-4"
              >
                <Share2 className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="whitespace-nowrap">Share task</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF8A4C] to-[#FF6A3D] px-3 py-1.5 text-xs font-medium text-white shadow-md transition-all duration-200 hover:scale-105 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm md:px-5"
              >
                <Plus className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="whitespace-nowrap">New task</span>
              </button>
            </div>
          </header>
          <p className="text-xs text-[#6B7280] sm:text-sm">
            View and manage all team members in one place.
          </p>
          <TabBar tabs={tabs} />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-[7fr_3fr] md:gap-6">
          <div className="flex min-w-0 flex-col gap-6">
            <DashboardCard className="flex min-h-[80px] w-full min-w-0 flex-col gap-3 rounded-[4px] border border-[#F5F5F5] bg-white p-3 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:min-h-[108px] sm:gap-5 sm:p-4 md:p-5">
              <p className="text-sm font-medium text-[#1F2937] sm:text-base">
                This is a creative product team
              </p>
              <div className="flex min-w-0 items-center gap-2 text-xs text-[#6B7280] sm:text-sm">
                <div className="h-4 w-4 rounded border border-[#E6E8F0]" />
                <span>Product Design</span>
                <Link2 className="h-4 w-4 text-[#9CA3AF]" />
              </div>
            </DashboardCard>

            <section className="relative flex min-h-0 w-full min-w-0 flex-col gap-4 rounded-[4px] border border-[#F5F5F5] bg-white p-3 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:min-h-[158px] sm:gap-5 sm:p-4 md:p-5">
              <div className="flex min-w-0 items-center justify-between gap-2">
                <h2 className="text-base font-semibold text-[#1F2937] sm:text-lg">Bookmarks</h2>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-[#E5E7EB] bg-gray-100 px-2 py-1 text-xs text-[#6B7280] sm:px-3">
                  Subtasks: Shown
                  <button type="button" className="rounded-lg p-0.5 hover:bg-gray-200" aria-label="Close">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-5">
                <BookmarkCard
                  icon={<Globe className="h-5 w-5" />}
                  title="Task Management"
                  description="Zoho Sprints is an Agile project manag..."
                />
                <BookmarkCard
                  icon={<Globe className="h-5 w-5" />}
                  title="Task Management"
                  description="Zoho Sprints is an Agile project manag..."
                />
              </div>
            </section>

            <section className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-1.5 sm:mb-3 sm:gap-2">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-xl border border-[#E5E7EB] bg-gray-100 px-2 py-1.5 text-xs text-[#1F2937] sm:px-3 sm:py-2 sm:text-sm"
                >
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Today
                  <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <span className="inline-flex items-center gap-1 rounded-xl border border-[#E5E7EB] bg-gray-100 px-2 py-1 text-xs text-[#6B7280] sm:px-3 sm:py-1.5">
                  Subtasks: Shown
                  <button type="button" className="rounded-lg p-0.5 hover:bg-gray-200" aria-label="Close">
                    <X className="h-3 w-3" />
                  </button>
                </span>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-xl border border-[#E5E7EB] bg-gray-100 px-2 py-1.5 text-xs text-[#6B7280] sm:px-3 sm:py-2 sm:text-sm"
                >
                  <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Filter By
                  <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
              <DashboardCard className="w-full min-h-[200px] min-w-0 rounded-[4px] border border-[#F5F5F5] bg-white p-3 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:min-h-[299px] sm:p-4 md:p-5">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="rounded-[4px] border border-[#E6E8F0] bg-[#FAFAFA] p-3 sm:p-4">
                    <ul className="flex flex-col gap-3 sm:gap-5">
                      <li className="flex min-w-0 items-start justify-between gap-2 py-2 first:pt-0 last:pb-0 sm:items-center sm:py-3">
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <div className="rounded-[4px] border border-[#E6E8F0] bg-white p-3 shadow-sm sm:p-4">
                            <span className="block truncate text-xs text-[#6B7280] sm:text-sm">
                              Team Space / Projects / Project 1
                            </span>
                            <div className="flex min-w-0 items-center gap-1.5 text-xs text-[#1F2937] sm:gap-2 sm:text-sm">
                              <div className="h-3.5 w-3.5 shrink-0 rounded border border-[#E6E8F0] sm:h-4 sm:w-4" />
                              <span className="truncate">Product Design</span>
                              <Link2 className="h-3.5 w-3.5 shrink-0 text-[#9CA3AF] sm:h-4 sm:w-4" />
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs text-[#9CA3AF]">11 mins</span>
                      </li>
                      {teamSpaceItems.slice(1).map((item, i) => (
                        <TaskItem key={i} item={item} />
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[4px] border border-[#E6E8F0] bg-[#FAFAFA] p-3 sm:p-4">
                    <ul className="flex flex-col gap-3 sm:gap-5">
                      <li className="flex min-w-0 items-start justify-between gap-2 py-2 first:pt-0 last:pb-0 sm:items-center sm:py-3">
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <div className="rounded-[4px] border border-[#E6E8F0] bg-white p-3 shadow-sm sm:p-4">
                            <span className="block truncate text-xs text-[#6B7280] sm:text-sm">
                              Personal List / Projects / Project 1
                            </span>
                            <div className="flex min-w-0 items-center gap-1.5 text-xs text-[#1F2937] sm:gap-2 sm:text-sm">
                              <div className="h-3.5 w-3.5 shrink-0 rounded border border-[#E6E8F0] sm:h-4 sm:w-4" />
                              <span className="truncate">Client Management Web App UI Design</span>
                              <Link2 className="h-3.5 w-3.5 shrink-0 text-[#9CA3AF] sm:h-4 sm:w-4" />
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs text-[#9CA3AF]">11 mins</span>
                      </li>
                      {personalListItems.slice(1).map((item, i) => (
                        <TaskItem key={`p-${i}`} item={item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </DashboardCard>
            </section>
          </div>

          <div className="flex min-w-0 flex-col gap-4 border-l-0 border-[#E6E8F0] pl-0 md:border-l md:pl-4 md:gap-6 lg:pl-6">
            <section className="flex min-h-0 w-full min-w-0 flex-col gap-3 rounded-[4px] border border-[#F5F5F5] bg-white p-3 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:min-h-[168px] sm:gap-5 sm:p-4">
              <div className="flex min-w-0 items-center justify-between">
                <h2 className="text-base font-semibold text-[#1F2937] sm:text-lg">Members</h2>
                <button
                  type="button"
                  className="rounded-xl p-1 text-[#6B7280] hover:bg-[#E6E8F0] hover:text-[#1F2937]"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <AvatarGroup
                avatars={[
                  "https://i.pravatar.cc/150?img=1",
                  "https://i.pravatar.cc/150?img=2",
                  "https://i.pravatar.cc/150?img=3",
                ]}
                showAdd
              />
              <div className="rounded-lg bg-[#E9E8FF] px-2 py-1.5 text-center text-xs font-medium text-[#5B4FE9] sm:px-3 sm:py-2">
                100% of people have Priorities set
              </div>
            </section>

            <section className="flex min-h-0 w-full min-w-0 flex-col gap-3 rounded-[4px] border border-[#F5F5F5] bg-white p-3 pb-2 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)] sm:gap-5 sm:p-4 sm:pb-3">
              <div className="flex min-w-0 items-center justify-between">
                <h2 className="text-base font-semibold text-[#1F2937] sm:text-lg">Member Online</h2>
                <button
                  type="button"
                  className="rounded-xl p-1 text-[#6B7280] hover:bg-[#E6E8F0] hover:text-[#1F2937]"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <MemberList members={membersOnline} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
