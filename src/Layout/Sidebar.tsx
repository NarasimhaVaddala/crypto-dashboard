import SidebarLinkItem from "@/Components/SidebarLinkItem";
import type { SidebarProps } from "@/types";

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-[100vh] w-[60vw] md:w-[30vw] 
        bg-primary shadow-2xl p-2 md:p-6 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="h-[3rem]" alt="logo" />
        <h2 className="text-lg font-bold">Crypto Dashboard</h2>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <SidebarLinkItem title="Dashboard" path="/" onClose={onClose} />

        <SidebarLinkItem title="About Me" path="/about" onClose={onClose} />
      </div>
    </aside>
  );
}
