"use client";

import { X } from "lucide-react";
import AvatarGroup from "@/components/AvatarGroup";
import MemberList from "@/components/MemberList";

const membersOnline = [
  { name: "Robin Wauters", role: "UI Designer" },
  { name: "Allu Arjun", role: "Product Designer" },
  { name: "Nithes Rana", role: "Product Designer" },
];

export default function RightSidebar() {
  return (
    <aside className="flex h-full w-full min-w-0 max-w-[340px] flex-col gap-6 overflow-auto border-l border-[#E6E8F0] bg-[#F9FAFB] p-4 shadow-xs tracking-tight sm:p-6 lg:max-w-[371px]">
      <section className="flex w-full min-h-[168px] flex-col gap-5 rounded-[4px] border border-[#F5F5F5] bg-white p-4 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1F2937]">Members</h2>
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

        <div className="rounded-lg bg-[#E9E8FF] px-3 py-2 text-center text-xs font-medium text-[#5B4FE9]">
          100% of people have Priorities set
        </div>
      </section>

      <section className="flex w-full min-h-[324px] flex-col gap-5 rounded-[4px] border border-[#F5F5F5] bg-white p-4 shadow-[1px_1px_20px_1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1F2937]">Member Online</h2>
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
    </aside>
  );
}
