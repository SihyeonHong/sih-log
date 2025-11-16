interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`bg-tag-background text-tag-foreground hover:bg-tag-hover border-border cursor-default rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
}
