import type { SidebarItemProps } from "@/types";
import { Link, useLocation } from "react-router-dom";

export default function SidebarLinkItem({
  title,
  path,
  onClose,
}: SidebarItemProps) {
  const { pathname } = useLocation();

  const active = pathname === path;

  return (
    <Link
      onClick={onClose}
      className={`block border border-gray-100 p-4 rounded-lg ${
        active && "bg-secondary text-primary"
      }`}
      to={path}
    >
      {title}
    </Link>
  );
}
