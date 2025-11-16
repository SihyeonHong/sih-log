"use client";

import { useState } from "react";
import { ChevronRight, PanelRightOpen } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {isCollapsed && (
        <button
          onClick={toggleSidebar}
          className="bg-background fixed top-4 right-4 z-50 flex items-center justify-center rounded-full p-3 shadow-xl transition-all hover:scale-105 hover:bg-stone-100 active:scale-95 active:bg-stone-200"
          aria-label="사이드바 열기"
        >
          <PanelRightOpen className="text-foreground h-6 w-6" />
        </button>
      )}
      <div
        className={`bg-background fixed top-0 min-h-screen w-96 shadow-xl transition-transform duration-300 ease-in-out ${
          isCollapsed ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ right: 0 }}
      >
        <div className="relative flex h-full flex-col">
          <button
            onClick={toggleSidebar}
            className="bg-background hover:bg-background-secondary/50 active:bg-background-secondary/60 absolute top-0 left-0 z-10 flex min-h-screen w-5 items-center justify-center transition-colors"
            aria-label="사이드바 접기"
          >
            <ChevronRight className="text-foreground h-5 w-5" />
          </button>
          <div className="flex h-full flex-col pl-8">
            <div className="border-border flex items-center border-b p-4">
              <h2 className="text-foreground text-lg font-semibold">
                사이드바
              </h2>
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground text-sm">테마 변경</span>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
