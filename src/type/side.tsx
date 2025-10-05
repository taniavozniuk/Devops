export type ToastType = "success" | "error" | "info" | "warning";

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About",
    children: [
      { id: "team", label: "Team", href: "/team" },
      { id: "history", label: "History", href: "/history" },
    ],
  },
  {
    id: "favorites",
    label: "Favorites",
    children: [
      { id: "music", label: "Music", href: "/music" },
      { id: "movies", label: "Movies", href: "/movies" },
    ],
  },
];
