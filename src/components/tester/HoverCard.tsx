import { ReactNode } from "react";

import cn from "@/utils/classname";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  animationDelay?: string;
}

/**
 * PostList에서 사용하는 hover 애니메이션이 있는 카드 컴포넌트
 * hover 시 scale 애니메이션과 fade-in-up 애니메이션을 제공합니다.
 */
export default function HoverCard({
  children,
  className,
  animationDelay,
}: HoverCardProps) {
  return (
    <article
      className={cn(
        "bg-card-background animate-fade-in-up border-border rounded-sm border p-4 shadow-md transition-all duration-300 hover:scale-[1.02] sm:p-6",
        className,
      )}
      style={{ animationDelay }}
    >
      {children}
    </article>
  );
}
