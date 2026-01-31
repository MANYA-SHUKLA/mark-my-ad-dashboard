# Mark My Ad — Task Dashboard

A responsive task and team management dashboard for viewing and managing team members, campaigns, and tasks in one place. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript.

---

## About the App

**Mark My Ad** is a single-page dashboard that provides:

- **Task Dashboard** — My Tasks, Task Calendar, Task Reports, and Task Portfolio (sidebar).
- **Campaigns** — Multiple campaigns with status indicators (e.g. Campaign 1–3).
- **Team** — All Team and Campaign-specific teams with quick access.
- **All Team** — Main area with Overview, Priority, Feed, Team, and Timesheet tabs; Share task and New task actions.
- **Creative Team** — Product team card with Product Design and linked tasks.
- **Bookmarks** — Saved items (e.g. Task Management) with subtask visibility.
- **Task list** — Activity feed with filters (Today, Subtasks, Filter By) and two grouped sections: Team Space (Product Design) and Personal List (Client Management Web App UI Design and related activity).
- **Members** — Right panel with member avatars (online profile photos), priorities progress, and Member Online list with status.

The UI is fully responsive across mobile, tablet, and laptop. Sidebar and navbar share the same background color (`#160E77`); the sidebar logo “MARK MY AD” has a red “AD” pill and a red line above the logo.

---

## Tech Stack

| Layer        | Technology        |
| ------------ | ----------------- |
| Framework    | Next.js 16 (App Router) |
| UI           | React 19          |
| Styling      | Tailwind CSS 4    |
| Icons        | Lucide React      |
| Language     | TypeScript        |

---

## Folder Structure

```
mark-my-ad-dashboard/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
│
├── next-env.d.ts
│
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    └── components/
        ├── AvatarGroup.tsx
        ├── BookmarkCard.tsx
        ├── DashboardCard.tsx
        ├── DashboardLayout.tsx
        ├── Header.tsx
        ├── LeftSidebar.tsx
        ├── MainContent.tsx
        ├── MemberList.tsx
        ├── Navbar.tsx
        ├── RightSidebar.tsx
        ├── Sidebar.tsx
        ├── TabBar.tsx
        └── TaskItem.tsx
```

### Key Files

| File | Purpose |
|------|--------|
| `src/app/page.tsx` | Entry page; renders `DashboardLayout`. |
| `src/app/layout.tsx` | Root HTML, body, Inter/Poppins fonts, metadata, viewport. |
| `src/app/globals.css` | Tailwind setup, CSS variables (colors), animations (`fadeIn`, `underlineSlide`), `.shadow-xs`. |
| `src/components/DashboardLayout.tsx` | Grid layout: sidebar column (fixed drawer on mobile), navbar + main content column. Manages sidebar open/close state and backdrop. |
| `src/components/MainContent.tsx` | All Team header (full width); 70/30 grid with left column (creative team, bookmarks, task list) and right column (Members, Member Online). |
| `src/components/Sidebar.tsx` | Left nav: logo with red “AD” and red top border, Task Dashboard, Campaign, Team, Settings, Supports. |
| `src/components/Navbar.tsx` | Top bar: menu (mobile), search (sm+), notifications, profile. Same background as sidebar. |
| `next.config.ts` | Next config; `images.remotePatterns` for `i.pravatar.cc` (profile photos). |

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Production

```bash
npm run build
npm start
```

---

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server. |
| `npm run build` | Build for production. |
| `npm start` | Start production server. |
| `npm run lint` | Run ESLint. |

---

Made with love by **Manya Shukla** © 2026
