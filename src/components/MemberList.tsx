"use client";

import { ChevronDown } from "lucide-react";

const avatarFallbackClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-gray-400 to-gray-500 text-xs font-medium text-white";

export type Member = { name: string; role: string; avatar?: string };

function Avatar({ name, src }: { name: string; src?: string }) {
  const initial = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 rounded-full border-2 border-white object-cover bg-gray-200"
      />
    );
  }
  return <div className={avatarFallbackClass}>{initial}</div>;
}

export default function MemberList({
  members,
  onMemberAction,
}: {
  members: Member[];
  onMemberAction?: (member: Member) => void;
}) {
  return (
    <ul className="flex flex-col gap-5">
      {members.map((member, index) => (
        <li
          key={member.name}
          className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E6E8F0] bg-white p-2 transition-colors hover:bg-gray-50 sm:gap-3 sm:p-3"
        >
          <div className="relative shrink-0">
            <Avatar name={member.name} src={member.avatar} />
            {index === 0 && (
              <span
                className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-orange-400"
                aria-hidden
              />
            )}
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <p className="truncate text-xs font-medium text-[#1F2937] sm:text-sm">
              {member.name}
            </p>
            <p className="truncate text-xs text-[#6B7280]">{member.role}</p>
          </div>
          <button
            type="button"
            onClick={() => onMemberAction?.(member)}
            className="shrink-0 rounded-xl p-1 text-[#9CA3AF] hover:bg-gray-100 hover:text-[#1F2937]"
            aria-label={`Options for ${member.name}`}
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
