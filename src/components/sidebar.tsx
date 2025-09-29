"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconListDetails,
  IconMap,
  IconNotebook,
  IconSettings,
  IconLogout,
  IconX,
  IconMenu2,
} from "@tabler/icons-react";
import { Text } from "@mantine/core";
import clsx from "clsx";

const menu = [
  { label: "Dashboard", icon: IconLayoutDashboard, href: "/admin/dashboard" },
  { label: "Danh mục", icon: IconListDetails, href: "/admin/category" },
  { label: "Vùng nuôi", icon: IconMap, href: "/admin/regions" },
  { label: "Nhật ký", icon: IconNotebook, href: "/admin/log" },
  { label: "Cài đặt", icon: IconSettings, href: "#" },
  { label: "Đăng xuất", icon: IconLogout, href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={clsx(
        "bg-[#1D558D] text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between px-3 pt-6 pb-4 mb-5">
        <div
          className={clsx(
            "transition-all duration-300 overflow-hidden whitespace-nowrap",
            isOpen
              ? "text-3xl font-bold text-[#53A5D7]"
              : "text-xs font-semibold"
          )}
        >
          {isOpen ? "GODACO" : ""}
        </div>
        <div
          className={clsx(isOpen ? "justify-end" : "justify-center", "flex")}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 transition-all duration-200 bg-white/10 hover:bg-white/20"
            aria-label={isOpen ? "Đóng sidebar" : "Mở sidebar"}
          >
            {isOpen ? (
              <IconX size={24} className="text-white" />
            ) : (
              <IconMenu2 size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menu.map(({ label, icon: Icon, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <Link
              key={label}
              href={href}
              className={clsx(
                "flex items-center px-4 py-3 transition-colors duration-200",
                isActive
                  ? "bg-white text-blue-900 font-semibold"
                  : "text-white hover:bg-white hover:text-black"
              )}
            >
              <Icon className="w-6 h-6 flex-shrink-0" />
              <span
                className={clsx(
                  "ml-3 transition-all duration-300 origin-left",
                  isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                <Text size="lg" className="font-medium text-base">
                  {label}
                </Text>
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
