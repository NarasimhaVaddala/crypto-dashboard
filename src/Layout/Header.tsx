import type { HeaderProps } from "@/types";
import { Menu } from "lucide-react";

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="flex fixed top-0 left-0 z-40 w-full items-center justify-between p-2 shadow-xl bg-primary">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="h-[3rem]" alt="" />
        <h2 className="hidden md:block text-lg font-bold">Crypto Dashboard</h2>
      </div>

      <div>
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
