"use client";

const avatarImgClass =
  "h-8 w-8 shrink-0 rounded-full border-2 border-white object-cover bg-gray-200";

export default function AvatarGroup({
  avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
  ],
  showAdd = true,
}: {
  avatars?: string[];
  showAdd?: boolean;
}) {
  return (
    <div className="flex -space-x-2">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          width={32}
          height={32}
          className={avatarImgClass}
        />
      ))}
      {showAdd && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-white">
          +
        </div>
      )}
    </div>
  );
}
