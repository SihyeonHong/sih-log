import { ReactNode } from "react";

import cn from "@/utils/classname";

interface StaticCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Post에서 사용하는 hover 효과가 없는 정적 카드 컴포넌트
 * 배경, 테두리, 그림자, 패딩이 적용된 깔끔한 카드 디자인을 제공합니다.
 */
export default function StaticCard({ children, className }: StaticCardProps) {
  return (
    <div
      className={cn(
        "bg-card-background border-border rounded-sm border p-6 shadow-sm sm:p-8 md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
