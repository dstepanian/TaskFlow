import { cn } from "@/lib/utils";
import { Category, categoryColors } from "@/lib/types";

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        categoryColors[category],
        "text-white",
        className
      )}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
  );
}